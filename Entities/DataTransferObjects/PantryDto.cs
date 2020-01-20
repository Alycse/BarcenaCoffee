using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DataTransferObjects {
    public class PantryDto {
        public Guid Id {
            get; set;
        }
        public Guid OfficeId {
            get; set;
        }
        public OfficeDto Office {
            get; set;
        }
        public string PantryName {
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
