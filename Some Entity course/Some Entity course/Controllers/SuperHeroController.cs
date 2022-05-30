﻿using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
namespace Some_Entity_course.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SuperHeroController : ControllerBase 
    {
        
        private static List<SuperHero> heroes = new List<SuperHero>
        {
            new SuperHero() {
                Id = 1, 
                Name = "Iron Man", 
                FirstName = "Anthony", 
                LastName = "Stark", 
                Place = "Long Island"
            },
            new SuperHero() {
                Id = 2, 
                Name = "Spider Man", 
                FirstName = "Peter", 
                LastName = "Parker", 
                Place = "NY City"
            }
        };
        
        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> Get()
        {
            return Ok(heroes);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<SuperHero>> Get(int id)
        {
            var hero = heroes.Find(h => h.Id == id);
            
            if (hero == null) return BadRequest("Hero not found.");
            
            return Ok(hero);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> AddHero([FromBody]SuperHero hero)
        {
            heroes.Add(hero);
            return Ok(heroes);
        }
        
        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateHero([FromBody]SuperHero request)
        {
            var hero = heroes.Find(h => h.Id == request.Id);
            
            if (hero == null) return BadRequest("Hero not found.");

            hero.Name = request.Name;
            hero.FirstName = request.FirstName;
            hero.LastName = request.LastName;
            hero.Place = request.LastName;

            return Ok(heroes);
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHero>>> Delete(int id)
        {
            var hero = heroes.Find(h => h.Id == id);
            
            if (hero == null) return BadRequest("Hero not found.");

            heroes.Remove(hero);
            return Ok(heroes);
        }
    }
}