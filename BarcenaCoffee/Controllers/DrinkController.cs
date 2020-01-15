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
    [Route("api/Drink")]
    [ApiController]
    public class DrinkController : ControllerBase {

        private DrinkRepository _drinkRepository;
        private IMapper _mapper;

        public DrinkController (DrinkRepository repository, IMapper mapper) {
            _drinkRepository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll () {
            try {
                var Drinks = _drinkRepository.GetAll();

                var DrinksResult = _mapper.Map<IEnumerable<DrinkDto>>(Drinks);
                return Ok(DrinksResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById (Guid id) {
            try {
                var drink = _drinkRepository.GetById(id);

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
    }
}