using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    class problems
    {
        public int Problems_Id { get; set; }
        public int Problems_Type_Id { get; set; }
        public int Problems_UserId { get; set; }
        public DateTime Problems_Time { get; set; }
        public string Problems_Title { get; set; }
        public string Problems_Content { get; set; }
        public int Problems_SeeCount { get; set; }
        public int Problems_CollectCount { get; set; }
        public int Problems_IsSolve { get; set; }
        public int Problems_Money { get; set; }
    }
}
