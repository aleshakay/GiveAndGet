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


        public IEnumerable<Chore> GetAllAvailableChores()
        { 
            using (var db = new SqlConnection(connectionString))
            {
                return db.Query<Chore>("Select * from [Chore] where ChoreCompleted = 'false'");
            }
        }

        public Chore AddNewChore(Chore choreToAdd)
        {
            var sql = @"INSERT INTO [Chore] (Name, EnteredDate, Picture, ChoreValue, ChoreCompleted, ChoreDescription, ChoreApproved )
                      values(@Name, @EnteredDate, @Picture, @ChoreValue, 'false', @ChoreDescription, 'false')";
            using (var db = new SqlConnection(connectionString))
            {
                var result = db.QueryFirstOrDefault<Chore>(sql, choreToAdd);
                return result;
            }
        }

        public Chore GetChoreById(int choreId)
        {
            var sql = @"Select * from [Chore] where ChoreId = @ChoreId;";
            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { ChoreId = choreId };
                var result = db.QueryFirstOrDefault<Chore>(sql, parameters);
                return result;
            }
        }

        public Chore UpdateUserIdOnChore(int choreId, int userId)
        {
            var sql = @"
                        UPDATE[Chore]
                        Set UserId = @UserId
                        Where ChoreId = @ChoreId;
                        ";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { UserId = userId, ChoreId = choreId };
                var result = db.QueryFirstOrDefault<Chore>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<Chore> GetAllNonCompletedOrdersByUserId(int userId)
        {
            var sql = @"SELECT *
                        FROM [Chore]
                        WHERE UserId = @UserId
                        AND ChoreCompleted = 'false';";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.Query<Chore>(sql, parameters);
                return result;
            }
        }

        public Chore UpdateCompleteStatusOnChore(int choreId)
        {
            var sql = @"
                        UPDATE[Chore]
                        Set ChoreCompleted = 1
                        Where ChoreId = @ChoreId
                        And UserId IS NOT NULL;
                        ";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { ChoreId = choreId };
                var result = db.QueryFirstOrDefault<Chore>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<Chore> GetCompletedChoresByUserId(int userId)
        {
            var sql = @"SELECT *
                        FROM [Chore]              
                        WHERE Chore.UserId = @UserId
                        AND Chore.ChoreCompleted = 'true'
                        AND Chore.ChoreApproved = 'true';";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.Query<Chore>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<Chore> GetAllFamiliesPendingChores(int userId)
        {
            var sql = @"SELECT chore.*, [User].FirstName
                        FROM[Chore]
                        JOIN[User]
                        On[Chore].UserId = [User].UserId
                        AND[User].FamilyId = (select FamilyId FROM[User] where UserId = @UserId)
                        AND Chore.ChoreCompleted = 'true'
                        AND Chore.ChoreApproved = 'false';";
            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.Query<Chore>(sql, parameters);
                return result;
            }
        }

        public bool UpdateStatusOnChore(int choreId)
        {
            var sql = @"UPDATE[Chore]
                        Set ChoreApproved = 'true'
                        Where ChoreId = @ChoreId
                        AND ChoreCompleted = 'true';
                        ";
            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { ChoreId = choreId };
                var result = db.Execute(sql, parameters);
                return result > 0;
            }
        }
        
    }
}
