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

    [Route("api/pantry")]
    [ApiController]
    public class PantryController : ControllerBase {

        private RepositoryWrapper _repository;
        private IMapper _mapper;

        public PantryController (RepositoryWrapper repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll () {
            try {
                var Pantrys = _repository.Pantry.GetAll();

                var PantrysResult = _mapper.Map<IEnumerable<PantryDto>>(Pantrys);
                return Ok(PantrysResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "PantryById")]
        public IActionResult GetById (Guid id) {
            try {
                var pantry = _repository.Pantry.GetById(id);

                if (pantry == null) {
                    return NotFound();
                } else {
                    var pantryResult = _mapper.Map<PantryDto>(pantry);
                    return Ok(pantryResult);
                }
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult Create ([FromBody]PantryCreationDto pantry) {
            try {
                if (pantry == null) {
                    return BadRequest("Pantry object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var pantryEntity = _mapper.Map<Pantry>(pantry);

                _repository.Pantry.Create(pantryEntity);
                _repository.Save();

                var createdPantry = _mapper.Map<PantryDto>(pantryEntity);

                return CreatedAtRoute("PantryById", new {
                    id = createdPantry.Id
                }, createdPantry);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update (Guid id, [FromBody]PantryUpdateDto pantry) {
            try {
                if (pantry == null) {
                    return BadRequest("Pantry object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var pantryEntity = _repository.Pantry.GetById(id);
                if (pantryEntity == null) {
                    return NotFound();
                }

                _mapper.Map(pantry, pantryEntity);

                _repository.Pantry.Update(pantryEntity);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePantry (Guid id) {
            try {
                var pantry = _repository.Pantry.GetById(id);
                if (pantry == null) {
                    return NotFound();
                }

                _repository.Pantry.Delete(pantry);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}