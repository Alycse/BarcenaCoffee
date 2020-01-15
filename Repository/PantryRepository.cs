using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository {
    public class PantryRepository : RepositoryBase<Pantry>, IPantryRepository {
        public PantryRepository (RepositoryContext repositoryContext)
            : base(repositoryContext) {
        }
    }
}
