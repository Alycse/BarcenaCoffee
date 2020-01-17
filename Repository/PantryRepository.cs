using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository {
    public class PantryRepository : Repository<Pantry> {
        public PantryRepository (RepositoryContext repositoryContext)
            : base(repositoryContext) {
        }

        public IEnumerable<Pantry> GetAll () {
            return FindAll()
                .OrderBy(pantry => pantry.PantryName)
                .ToList();
        }

        public Pantry GetById (Guid pantryId) {
            return FindByCondition(pantry => pantry.Id.Equals(pantryId))
                .FirstOrDefault();
        }
    }
}
