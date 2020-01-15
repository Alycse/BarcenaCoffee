using Contracts;
using Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository {
    public class RepositoryWrapper : IRepositoryWrapper {
        private RepositoryContext _repoContext;
        private IPantryRepository _pantry;
        private IDrinkRepository _drink;
        private IOrderRepository _order;

        public IPantryRepository Pantry {
            get {
                if (_pantry == null) {
                    _pantry = new PantryRepository(_repoContext);
                }

                return _pantry;
            }
        }

        public IDrinkRepository Drink {
            get {
                if (_drink == null) {
                    _drink = new DrinkRepository(_repoContext);
                }

                return _drink;
            }
        }

        public IOrderRepository Order {
            get {
                if (_order == null) {
                    _order = new OrderRepository(_repoContext);
                }

                return _order;
            }
        }

        public RepositoryWrapper (RepositoryContext repositoryContext) {
            _repoContext = repositoryContext;
        }

        public void Save () {
            _repoContext.SaveChanges();
        }
    }
}