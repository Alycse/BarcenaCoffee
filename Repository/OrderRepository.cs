using Contracts;
using Entities;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository {
    public class OrderRepository : Repository<Order> {
        public OrderRepository (RepositoryContext repositoryContext)
            : base(repositoryContext) {
        }

        public IEnumerable<Order> GetAll () {
            return FindAll()
                .OrderByDescending(order => order.OrderDate)
                .ToList();
        }

        public Order GetById (Guid orderId) {
            return FindByCondition(order => order.Id.Equals(orderId))
                .FirstOrDefault();
        }

        public Order GetWithDrinksById (Guid orderId) {
            return FindByCondition(owner => owner.Id.Equals(orderId))
                .Include(order => order.Drink)
                .FirstOrDefault();
        }
    }
}
