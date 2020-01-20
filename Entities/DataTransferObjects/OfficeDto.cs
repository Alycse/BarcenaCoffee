using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DataTransferObjects {
    public class OfficeDto {
        public Guid Id {
            get; set;
        }
        public string OfficeName {
            get; set;
        }
    }
}
