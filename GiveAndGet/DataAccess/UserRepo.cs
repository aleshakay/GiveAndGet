using GiveAndGet.Models;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace GiveAndGet.DataAccess
{
    public class UserRepo
    {
        string connectionString;
        public UserRepo(IConfiguration config)
        {
            connectionString = config.GetConnectionString("GiveAndGet");
        }

        public User GetUserById(int userId)
        {
            var sql = @" SELECT * 
                      FROM [User]
                      WHERE UserId = @UserId";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { UserId = userId };
                var user = db.QueryFirstOrDefault<User>(sql, parameters);
                return user;
            }
        }

        public IEnumerable<User> GetUserNamesByUserId(int userId)
        {
            var sql = @"SELECT Distinct([User].FirstName), [User].*
                        FROM [User]
                        JOIN [Chore]
                        On [User].UserId = [Chore].UserId 
                        AND [User].FamilyId = (select FamilyId FROM [User] where UserId = @UserId)
                        AND Chore.ChoreCompleted = 'true'
                        AND Chore.ChoreApproved = 'true';";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { UserId = userId };
                var result = db.Query<User>(sql, parameters);
                return result;
            }
        }
    }
}
