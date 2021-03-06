﻿using Contracts;
using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Repository {
    public abstract class Repository<T> : IRepository<T> where T : class {
        protected RepositoryContext RepositoryContext {
            get; set;
        }

        public Repository (RepositoryContext repositoryContext) {
            this.RepositoryContext = repositoryContext;
        }

        public IQueryable<T> FindAll () {
            return this.RepositoryContext.Set<T>().AsNoTracking();
        }

        public IQueryable<T> FindByCondition (Expression<Func<T, bool>> expression) {
            return this.RepositoryContext.Set<T>().Where(expression).AsNoTracking();
        }

        public void Create (T entity) {
            this.RepositoryContext.Set<T>().Add(entity);
        }

        public void Update (T entity) {
            this.RepositoryContext.Set<T>().Update(entity);
        }

        public void Delete (T entity) {
            this.RepositoryContext.Set<T>().Remove(entity);
        }
    }
}