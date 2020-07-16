using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiveAndGet.Models
{
    public class Reward
    {
        public int RewardId { get; set; }
        public string Name { get; set; }
        public DateTime EnteredDate { get; set; }
        public string Picture { get; set; }
        public int RewardValue { get; set; }
        public bool RewardAvailable { get; set; }
        public int UserId { get; set; }
    }
}
