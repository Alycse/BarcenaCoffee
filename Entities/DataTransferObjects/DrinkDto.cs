using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DataTransferObjects {
    public class DrinkDto {
        public Guid Id {
            get; set;
        }
        public string DrinkName {
            get; set;
        }
        public int CoffeeBeanUnits {
            get; set;
        }
        public int SugarUnits {
            get; set;
        }
        public int MilkUnits {
            get; set;
        }
    }
}
