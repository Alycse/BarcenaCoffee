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

namespace BarcenaCoffee.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase {

        private RepositoryWrapper _repository;
        private IMapper _mapper;

        public OrderController (RepositoryWrapper repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll () {
            try {
                var orders = _repository.Order.GetAll();

                var ordersResult = _mapper.Map<IEnumerable<OrderDto>>(orders);
                return Ok(ordersResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "OrderById")]
        public IActionResult GetById (Guid id) {
            try {
                var order = _repository.Order.GetById(id);

                if (order == null) {
                    return NotFound();
                } else {
                    var orderResult = _mapper.Map<OrderDto>(order);
                    return Ok(orderResult);
                }
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }
        
        [HttpGet("{id}/order")]
        public IActionResult GetWithDrinkById (Guid id) {
            try {
                var order = _repository.Order.GetWithDrinksById(id);

                if (order == null) {
                    return NotFound();
                } else {
                    var orderResult = _mapper.Map<OrderDto>(order);
                    return Ok(orderResult);
                }
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}/pantry", Name = "OrderByPantryId")]
        public IActionResult GetAllByPantryId (Guid id) {
            try {
                var orders = _repository.Order.GetAllByPantryId(id);

                var ordersResult = _mapper.Map<IEnumerable<OrderDto>>(orders);
                return Ok(ordersResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult Create ([FromBody]OrderCreationDto order) {
            try {
                if (order == null) {
                    return BadRequest("Order object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var orderEntity = _mapper.Map<Order>(order);

                _repository.Order.Create(orderEntity);
                _repository.Save();

                var createdOrder = _mapper.Map<OrderDto>(orderEntity);

                return CreatedAtRoute("OrderById", new {
                    id = createdOrder.Id
                }, createdOrder);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update (Guid id, [FromBody]OrderUpdateDto order) {
            try {
                if (order == null) {
                    return BadRequest("Order object is null");
                }

                if (!ModelState.IsValid) {
                    return BadRequest("Invalid model object");
                }

                var orderEntity = _repository.Order.GetById(id);
                if (orderEntity == null) {
                    return NotFound();
                }

                _mapper.Map(order, orderEntity);

                _repository.Order.Update(orderEntity);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (Guid id) {
            try {
                var order = _repository.Order.GetById(id);
                if (order == null) {
                    return NotFound();
                }

                _repository.Order.Delete(order);
                _repository.Save();

                return NoContent();
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}