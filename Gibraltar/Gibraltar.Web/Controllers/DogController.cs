using Gibraltar.Web.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gibraltar.Web.Controllers
{
    [Route("api/v1/dog")]
    public class DogController : Controller
    {
        [HttpGet("list")]
        public IEnumerable<Dog> GetDogs()
        {
            var dogs = new List<Dog>();

            dogs.Add(new Dog {
                Id = 1,
                Legs = 4,
                Name = "Fido",
                Type = "Tax"
            });

            dogs.Add(new Dog
            {
                Id = 2,
                Legs = 3,
                Name = "Dino",
                Type = "Tax"
            });
            dogs.Add(new Dog
            {
                Id = 3,
                Legs = 4,
                Name = "Snoopy",
                Type = "Lion"
            });

            return dogs;
        }
    }
}
