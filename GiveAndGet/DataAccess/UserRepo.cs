using GiveAndGet.Models;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Data.SqlClient;

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
    }
}
