﻿using Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.DataTransferObjects {
    public class OrderUpdateDto {

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