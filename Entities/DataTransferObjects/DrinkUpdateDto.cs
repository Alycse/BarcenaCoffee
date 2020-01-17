using Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.DataTransferObjects {
    public class DrinkUpdateDto {

        [Required(ErrorMessage = "Drink Name is required!")]
        [StringLength(60, ErrorMessage = "Drink Name can't be longer than 45 characters!")]
        public string DrinkName {
            get; set;
        }

        [StringLength(180, ErrorMessage = "Drink Image File Name can't be longer than 180 characters!")]
        public string DrinkImageFileName {
            get; set;
        }

        [Required(ErrorMessage = "Coffee Bean Units is required!")]
        public int CoffeeBeanUnits {
            get; set;
        }

        [Required(ErrorMessage = "Sugar Units is required!")]
        public int SugarUnits {
            get; set;
        }

        [Required(ErrorMessage = "Milk Units is required!")]
        public int MilkUnits {
            get; set;
        }
    }
}
