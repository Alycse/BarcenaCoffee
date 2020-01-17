using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository {
    public class DrinkRepository : Repository<Drink> {
        public DrinkRepository (RepositoryContext repositoryContext)
            : base(repositoryContext) {
        }

        public IEnumerable<Drink> GetAll () {
            return FindAll()
                .OrderBy(drink => drink.Id)
                .ToList();
        }

        public Drink GetById (Guid drinkId) {
            return FindByCondition(drink => drink.Id.Equals(drinkId))
                .FirstOrDefault();
        }
    }
}
