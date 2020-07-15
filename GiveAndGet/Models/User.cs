using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiveAndGet.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int AvatarId { get; set; }
        public int Age { get; set; }
        public int RoleId { get; set; }
        public int FamilyId { get; set; }
        public int Pin { get; set; }
        public int ChoreRewardPoint { get; set; }
    }
}
