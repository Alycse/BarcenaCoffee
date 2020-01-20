using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository {
    public class RepositoryWrapper {

        private RepositoryContext _repoContext;

        private PantryRepository _pantryRepository;
        private DrinkRepository _drinkRepository;
        private OrderRepository _orderRepository;
        private OfficeRepository _officeRepository;

        public PantryRepository Pantry {
            get {
                if (_pantryRepository == null) {
                    _pantryRepository = new PantryRepository(_repoContext);
                }

                return _pantryRepository;
            }
        }

        public DrinkRepository Drink {
            get {
                if (_drinkRepository == null) {
                    _drinkRepository = new DrinkRepository(_repoContext);
                }

                return _drinkRepository;
            }
        }

        public OrderRepository Order {
            get {
                if (_orderRepository == null) {
                    _orderRepository = new OrderRepository(_repoContext);
                }

                return _orderRepository;
            }
        }

        public OfficeRepository Office {
            get {
                if (_officeRepository == null) {
                    _officeRepository = new OfficeRepository(_repoContext);
                }

                return _officeRepository;
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