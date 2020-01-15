using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BarcenaCoffee.Controllers {

    [Route("api/[controller]")]
    [ApiController]
    public class WeatherForecast : ControllerBase {
        private IRepositoryWrapper _repoWrapper;

        public WeatherForecast (IRepositoryWrapper repoWrapper) {
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
