using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Repository;

namespace BarcenaCoffee.Controllers {

    [Route("api/[controller]")]
    [ApiController]
    public class WeatherForecast : ControllerBase {
        private RepositoryWrapper _repoWrapper;

        public WeatherForecast (RepositoryWrapper repoWrapper) {
            _repoWrapper = repoWrapper;
        }

        [HttpGet]
        public IEnumerable<string> Get () {
            var pantries = _repoWrapper.Pantry.FindAll();
            var drinks = _repoWrapper.Drink.FindAll();
            var orders = _repoWrapper.Order.FindAll();

            return new string[] { "value1", "value2" };
        }
    }
}
