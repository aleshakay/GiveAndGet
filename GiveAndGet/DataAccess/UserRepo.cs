using GiveAndGet.Models;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Data.SqlClient;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using System.Linq;

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
        public bool UpdateChorePointsOnUserId(int userId, int choreRewardPoint)
        {
            var sql = @"UPDATE [User]
                        set ChoreRewardPoint = ChoreRewardPoint + @ChoreRewardPoint
                        where UserId = @UserId;
                        ";
            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new
                {
                    UserId = userId,
                    ChoreRewardPoint = choreRewardPoint,
                };
                var result = db.Execute(sql, parameters);
                return result > 0;
            }
        }

        public User Add(User userToAdd)
        {
            var sql = @"insert into [User](FirstName, LastName, AvatarId, Age, 
                        RoleId, FamilyId, Pin, ChoreRewardPoint)
                        Values(@FirstName, @LastName, @AvatarId,
                        @Age, @RoleId, 1, @Pin, @ChoreRewardPoint)";

            using (var db = new SqlConnection(connectionString))
            {
                var result = db.QueryFirstOrDefault<User>(sql, userToAdd);
                return result;
            }
        }

        public List<Role> GetAllRoles()
        {
            using (var db = new SqlConnection(connectionString))
            {
                return db.Query<Role>("select * from role").ToList();
            }
        }
        public User UpdateUserPoints(int userId, int rewardId)
        {
            var sql = @"  UPDATE [User]
                        SET [User].ChoreRewardPoint = ([User].ChoreRewardPoint - [Reward].RewardValue)
                        FROM [User] 
                        JOIN [Reward] 
                        ON [User].UserId = [Reward].UserId
                        WHERE [User].UserId = @UserId
                        AND [Reward].RewardId = @RewardId
                        AND [Reward].RewardAvailable = 'false';";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new
                { UserId = userId,
                  RewardId = rewardId
                };

                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }
    }
}
