using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models {

    [Table("Pantry")]
    public class Pantry {

        [Column("PantryId")]
        public Guid Id {
            get; set;
        }

        [ForeignKey(nameof(Office))]
        public Guid OfficeId {
            get; set;
        }
        public Office Office {
            get; set;
        }

        [StringLength(45, ErrorMessage = "Pantry Name can't be longer than 45 characters!")]
        public string PantryName {
            get; set;
        }

        [Required(ErrorMessage = "Coffee Bean Units Amount is required!")]
        public int CoffeeBeanUnits {
            get; set;
        }

        [Required(ErrorMessage = "Sugar Units Amount is required!")]
        public int SugarUnits {
            get; set;
        }

        [Required(ErrorMessage = "Milk Units Amount is required!")]
        public int MilkUnits {
            get; set;
        }
    }
}
