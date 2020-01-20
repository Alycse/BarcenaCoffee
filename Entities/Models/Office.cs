using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models {

    [Table("Office")]
    public class Office {

        [Column("OfficeId")]
        public Guid Id {
            get; set;
        }

        [StringLength(45, ErrorMessage = "Office Name can't be longer than 45 characters!")]
        public string OfficeName {
            get; set;
        }
    }
}