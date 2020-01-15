using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository {
    public class OrderRepository : RepositoryBase<Order>, IOrderRepository {
        public OrderRepository (RepositoryContext repositoryContext)
            : base(repositoryContext) {
        }
    }
}
