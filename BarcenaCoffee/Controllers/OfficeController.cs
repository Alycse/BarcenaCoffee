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

    [Route("api/office")]
    [ApiController]
    public class OfficeController : ControllerBase {

        private RepositoryWrapper _repository;
        private IMapper _mapper;

        public OfficeController (RepositoryWrapper repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll () {
            try {
                var Offices = _repository.Office.GetAll();

                var OfficesResult = _mapper.Map<IEnumerable<OfficeDto>>(Offices);
                return Ok(OfficesResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "OfficeById")]
        public IActionResult GetById (Guid id) {
            try {
                var office = _repository.Office.GetById(id);

                if (office == null) {
                    return NotFound();
                } else {
                    var officeResult = _mapper.Map<OfficeDto>(office);
                    return Ok(officeResult);
                }
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult Create ([FromBody]OfficeCreationDto office) {
            try {
                if (office == null) {
                    return BadRequest("Office object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var officeEntity = _mapper.Map<Office>(office);

                _repository.Office.Create(officeEntity);
                _repository.Save();

                var createdOffice = _mapper.Map<OfficeDto>(officeEntity);

                return CreatedAtRoute("OfficeById", new {
                    id = createdOffice.Id
                }, createdOffice);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update (Guid id, [FromBody]OfficeUpdateDto office) {
            try {
                if (office == null) {
                    return BadRequest("Office object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var officeEntity = _repository.Office.GetById(id);
                if (officeEntity == null) {
                    return NotFound();
                }

                _mapper.Map(office, officeEntity);

                _repository.Office.Update(officeEntity);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (Guid id) {
            try {
                var office = _repository.Office.GetById(id);
                if (office == null) {
                    return NotFound();
                }

                _repository.Office.Delete(office);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}