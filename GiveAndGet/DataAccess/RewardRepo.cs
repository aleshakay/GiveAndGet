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
    public class RewardRepo
    {
        string connectionString;
        public RewardRepo(IConfiguration config)
        {
            connectionString = config.GetConnectionString("GiveAndGet");
        }
        public Reward AddNewReward (Reward rewardToAdd)
        {
            var sql = @" INSERT INTO [Reward] 
              (Name, EnteredDate, Picture, RewardValue, RewardAvailable)
              output inserted.*
              VALUES(@Name, @EnteredDate, @Picture, @RewardValue, @RewardAvailable);";

            using (var db = new SqlConnection(connectionString))
            {
                var results = db.QueryFirstOrDefault<Reward>(sql, rewardToAdd);
                return results;
            }
        }

        public List<Reward> GetAllRewards()
        {
            using (var db = new SqlConnection(connectionString))
            {
                return db.Query<Reward>("select * from reward").ToList();
            }
        }
    }
}
