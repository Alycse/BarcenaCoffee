using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models {

    [Table("Pantry")]
    public class Pantry {
        public Guid PantryId {
            get; set;
        }

        [Required(ErrorMessage = "Coffee Bean Bag Amount is required!")]
        public int CoffeeBeanBagAmount {
            get; set;
        }

        [Required(ErrorMessage = "Sugar Pack Amount is required!")]
        public int SugarPackAmount {
            get; set;
        }

        [Required(ErrorMessage = "Milk Carton Amount is required!")]
        public int MilkCartonAmount {
            get; set;
        }
    }
}
