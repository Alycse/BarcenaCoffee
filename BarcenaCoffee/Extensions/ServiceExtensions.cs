using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Repository;
using Contracts;
using BarcenaCoffeeX;
using Entities.Models;

namespace BarcenaCoffee.Extensions {
    public static class ServiceExtensions {
        public static void ConfigureCors (this IServiceCollection services) {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });
        }

        public static void ConfigureIISIntegration (this IServiceCollection services) {
            services.Configure<IISOptions>(options =>
            {
            });
        }

        public static void ConfigureMySqlContext (this IServiceCollection services, IConfiguration config) {
            var connectionString = config["mysqlconnection:connectionString"];
            //services.AddDbContext<RepositoryContext>(o => o.UseMySql(connectionString));
            services.AddDbContext<RepositoryContext>(options => options.UseInMemoryDatabase(databaseName: "barcenacoffee"));

        }

        public static void ConfigureRepositoryWrapper (this IServiceCollection services) {
            services.AddScoped<RepositoryWrapper>();
        }
 
    }
}
