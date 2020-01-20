using Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.DataTransferObjects {
    public class OfficeCreationDto {

        [StringLength(45, ErrorMessage = "Office Name can't be longer than 45 characters!")]
        public string OfficeName {
            get; set;
        }
    }
}
