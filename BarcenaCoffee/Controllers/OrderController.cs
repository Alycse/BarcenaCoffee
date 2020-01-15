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

        private OrderRepository _orderRepository;
        private IMapper _mapper;

        public OrderController (OrderRepository repository, IMapper mapper) {
            _orderRepository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll () {
            try {
                var orders = _orderRepository.GetAll();

                var ordersResult = _mapper.Map<IEnumerable<OrderDto>>(orders);
                return Ok(ordersResult);
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "GetById")]
        public IActionResult GetById (Guid id) {
            try {
                var order = _orderRepository.GetById(id);

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

        [HttpGet("{id}/drink")]
        public IActionResult GetWithDrinksById (Guid id) {
            try {
                var owner = _orderRepository.GetWithDrinksById(id);

                if (owner == null) {
                    return NotFound();
                } else {
                    var orderResult = _mapper.Map<OrderDto>(owner);
                    return Ok(orderResult);
                }
            } catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}