using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models {

    [Table("Order")]
    public class Order {
        public Guid OrderId {
            get; set;
        }

        [ForeignKey(nameof(Drink))]
        public Guid DrinkId {
            get; set;
        }
        public Drink Drink {
            get; set;
        }

        [Required(ErrorMessage = "Order Date created is required!")]
        public DateTime OrderDate {
            get; set;
        }
    }
}
