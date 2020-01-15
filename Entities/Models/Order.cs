using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models {

    [Table("Order")]
    public class Order {

        [Column("OrderId")]
        public Guid Id {
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
