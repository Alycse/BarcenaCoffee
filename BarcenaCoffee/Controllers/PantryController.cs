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
    [Route("api/Pantry")]
    [ApiController]
    public class PantryController : ControllerBase {

        private PantryRepository _pantryRepository;
        private IMapper _mapper;

        public PantryController (PantryRepository repository, IMapper mapper) {
            _pantryRepository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll () {
            try {
                var Pantrys = _pantryRepository.GetAll();

                var PantrysResult = _mapper.Map<IEnumerable<PantryDto>>(Pantrys);
                return Ok(PantrysResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById (Guid id) {
            try {
                var pantry = _pantryRepository.GetById(id);

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
    }
}