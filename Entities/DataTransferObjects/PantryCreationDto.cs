using Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.DataTransferObjects {
    public class PantryCreationDto {

        [StringLength(45, ErrorMessage = "Pantry Name can't be longer than 45 characters!")]
        public string PantryName {
            get; set;
        }

        [ForeignKey(nameof(Office))]
        public Guid OfficeId {
            get; set;
        }
        public Office Office {
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
