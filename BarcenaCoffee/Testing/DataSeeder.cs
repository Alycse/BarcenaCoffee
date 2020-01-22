using Entities;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BarcenaCoffeeX.Testing {
    public static class DataSeeder {

        //Seed initial data for barcenacoffee
        public static void SeedInitialData () {
            var options = new DbContextOptionsBuilder<RepositoryContext>()
               .UseInMemoryDatabase(databaseName: "barcenacoffee")
               .Options;

            using (var context = new RepositoryContext(options)) {
                AddInitialOffices(context);
                AddInitialDrinks(context);
                AddInitialPantries(context);

                context.SaveChanges();
            }
        }

        static void AddInitialPantries (RepositoryContext context) {
            context.Pantries.AddRange(
                new Pantry {
                    Id = Guid.Parse("96a8bf25-ce6d-40e9-93cf-2d62724fb463"),
                    OfficeId = Guid.Parse("9572f66d-c411-496f-9d05-efffe2d4e6e8"),
                    PantryName = "Pantry A",
                    CoffeeBeanUnits = 45,
                    SugarUnits = 45,
                    MilkUnits = 45
                },
                new Pantry {
                    Id = Guid.Parse("c6066eb0-53ca-43e1-97aa-3c2169eec659"),
                    OfficeId = Guid.Parse("9572f66d-c411-496f-9d05-efffe2d4e6e8"),
                    PantryName = "Pantry B",
                    CoffeeBeanUnits = 40,
                    SugarUnits = 30,
                    MilkUnits = 45
                },
                new Pantry {
                    Id = Guid.Parse("04d50500-e716-45ad-9611-31b3c85033fe"),
                    OfficeId = Guid.Parse("29ffca46-4a18-49fd-b208-4a7bae3317dd"),
                    PantryName = "Pantry X",
                    CoffeeBeanUnits = 30,
                    SugarUnits = 45,
                    MilkUnits = 20
                },
                new Pantry {
                    Id = Guid.Parse("31f19094-11f7-4d00-b0d1-a11c471ada2d"),
                    OfficeId = Guid.Parse("29ffca46-4a18-49fd-b208-4a7bae3317dd"),
                    PantryName = "Pantry Y",
                    CoffeeBeanUnits = 45,
                    SugarUnits = 45,
                    MilkUnits = 30
                },
                new Pantry {
                    Id = Guid.Parse("50cf913e-5b27-4b37-ad5c-5458de51af5c"),
                    OfficeId = Guid.Parse("29ffca46-4a18-49fd-b208-4a7bae3317dd"),
                    PantryName = "Pantry Z",
                    CoffeeBeanUnits = 30,
                    SugarUnits = 30,
                    MilkUnits = 30
                }
            );
        }

        static void AddInitialOffices (RepositoryContext context) {
            context.Offices.AddRange(
                new Office {
                    Id = Guid.Parse("9572f66d-c411-496f-9d05-efffe2d4e6e8"),
                    OfficeName = "Office A"
                },
                new Office {
                    Id = Guid.Parse("29ffca46-4a18-49fd-b208-4a7bae3317dd"),
                    OfficeName = "Office B"
                }
            );
        }

        static void AddInitialDrinks (RepositoryContext context) {
            context.Drinks.AddRange(
                new Drink {
                    Id = Guid.Parse("24fd81f8-d58a-4bcc-9f35-dc6cd5641906"),
                    DrinkImageFileName = "double-americano.png",
                    DrinkName = "Double Americano",
                    CoffeeBeanUnits = 3,
                    SugarUnits = 0,
                    MilkUnits = 0
                },
                new Drink {
                    Id = Guid.Parse("261e1685-cf26-494c-b17c-3546e65f5620"),
                    DrinkImageFileName = "sweet-latte.png",
                    DrinkName = "Sweet Latte",
                    CoffeeBeanUnits = 2,
                    SugarUnits = 5,
                    MilkUnits = 3
                },
                new Drink {
                    Id = Guid.Parse("f98e4d74-0f68-4aac-89fd-047f1aaca6b6"),
                    DrinkImageFileName = "flat-white.png",
                    DrinkName = "Flat White",
                    CoffeeBeanUnits = 2,
                    SugarUnits = 1,
                    MilkUnits = 4
                }
            );
        }
    }
}
