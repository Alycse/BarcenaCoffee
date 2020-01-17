using AutoMapper;
using Entities.DataTransferObjects;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BarcenaCoffee {
    public class MappingProfile : Profile {
        public MappingProfile () {
            CreateMap<Pantry, PantryDto>();
            CreateMap<Drink, DrinkDto>();
            CreateMap<Order, OrderDto>();

            CreateMap<PantryCreationDto, Pantry>();
            CreateMap<DrinkCreationDto, Drink>();
            CreateMap<OrderCreationDto, Order>();

            CreateMap<PantryUpdateDto, Pantry>();
            CreateMap<DrinkUpdateDto, Drink>();
            CreateMap<OrderUpdateDto, Order>();
        }
    }
}
