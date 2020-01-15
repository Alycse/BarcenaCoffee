using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository {
    public class DrinkRepository : RepositoryBase<Drink>, IDrinkRepository {
        public DrinkRepository (RepositoryContext repositoryContext)
            : base(repositoryContext) {
        }
    }
}
