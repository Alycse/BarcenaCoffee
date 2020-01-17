using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Contracts;
using Entities.DataTransferObjects;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository;

namespace BarcenaCoffee.Controllers {

    [Route("api/drink")]
    [ApiController]
    public class DrinkController : ControllerBase {

        private RepositoryWrapper _repository;
        private IMapper _mapper;

        public DrinkController (RepositoryWrapper repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll () {
            try {
                var Drinks = _repository.Drink.GetAll();

                var DrinksResult = _mapper.Map<IEnumerable<DrinkDto>>(Drinks);
                return Ok(DrinksResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "DrinkById")]
        public IActionResult GetById (Guid id) {
            try {
                var drink = _repository.Drink.GetById(id);

                if (drink == null) {
                    return NotFound();
                } else {
                    var drinkResult = _mapper.Map<DrinkDto>(drink);
                    return Ok(drinkResult);
                }
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult Create ([FromBody]DrinkCreationDto drink) {
            try {
                if (drink == null) {
                    return BadRequest("Drink object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var drinkEntity = _mapper.Map<Drink>(drink);

                _repository.Drink.Create(drinkEntity);
                _repository.Save();

                var createdDrink = _mapper.Map<DrinkDto>(drinkEntity);

                return CreatedAtRoute("DrinkById", new {
                    id = createdDrink.Id
                }, createdDrink);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update (Guid id, [FromBody]DrinkUpdateDto drink) {
            try {
                if (drink == null) {
                    return BadRequest("Drink object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var drinkEntity = _repository.Drink.GetById(id);
                if (drinkEntity == null) {
                    return NotFound();
                }

                _mapper.Map(drink, drinkEntity);

                _repository.Drink.Update(drinkEntity);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (Guid id) {
            try {
                var drink = _repository.Drink.GetById(id);
                if (drink == null) {
                    return NotFound();
                }

                _repository.Drink.Delete(drink);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}