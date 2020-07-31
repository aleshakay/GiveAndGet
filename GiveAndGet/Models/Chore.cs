using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiveAndGet.Models
{
    public class Chore
    {
        public int ChoreId { get; set; }
        public string Name { get; set; }
        public DateTime EnteredDate { get; set; }
        public string Picture { get; set; }
        public int ChoreValue { get; set; }
        public bool ChoreCompleted { get; set; }
        public string ChoreDescription { get; set; }
        public bool ChoreApproved { get; set; }
        public int userId { get; set; }
    }
}
