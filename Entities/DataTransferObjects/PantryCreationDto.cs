using Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.DataTransferObjects {
    public class PantryCreationDto {

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
