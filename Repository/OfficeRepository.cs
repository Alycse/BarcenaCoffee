using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository {
    public class OfficeRepository : Repository<Office> {
        public OfficeRepository (RepositoryContext repositoryContext)
            : base(repositoryContext) {
        }

        public IEnumerable<Office> GetAll () {
            return FindAll()
                .OrderBy(office => office.OfficeName)
                .ToList();
        }

        public Office GetById (Guid officeId) {
            return FindByCondition(office => office.Id.Equals(officeId))
                .FirstOrDefault();
        }
    }
}
