using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DataTransferObjects {
    public class PantryDto {
        public Guid Id {
            get; set;
        }
        public int CoffeeBeanBagAmount {
            get; set;
        }
        public int SugarPackAmount {
            get; set;
        }
        public int MilkCartonAmount {
            get; set;
        }
    }
}
