using Dapper;
using GiveAndGet.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GiveAndGet.DataAccess
{
    public class ChoreRepo
    {
        string connectionString;
        public ChoreRepo(IConfiguration config)
        {
            connectionString = config.GetConnectionString("GiveAndGet");
        }

        public IEnumerable<Chore> GetAllChores()
        {
            using (var db = new SqlConnection(connectionString))
            {
                return db.Query<Chore>("select * from [Chore]");
            }
        } 

        public Chore AddNewChore(Chore choreToAdd)
        {
            var sql = @"INSERT INTO [Chore] (Name, EnteredDate, Picture, ChoreValue, ChoreCompleted, ChoreDescription, ChoreApproved )
                      output inserted.*
                      values(@Name, @EnteredDate, @Picture, @ChoreValue, @ChoreCompleted, @ChoreDescription, @ChoreApproved)";
            using (var db = new SqlConnection(connectionString))
            {
                var result = db.QueryFirstOrDefault<Chore>(sql, choreToAdd);
                return result;
            }
        }
    }
}
