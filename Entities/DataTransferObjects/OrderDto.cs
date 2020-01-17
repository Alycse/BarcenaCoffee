using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DataTransferObjects {
    public class OrderDto {
        public Guid Id {
            get; set;
        }

        public Guid DrinkId {
            get; set;
        }
        public DrinkDto Drink {
            get; set;
        }

        public Guid PantryId {
            get; set;
        }
        public Pantry Pantry {
            get; set;
        }

        public DateTime OrderDate {
            get; set;
        }
    }
}
