using Microsoft.AspNetCore.Html;
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

        private readonly DataContext _context;
        
        public SuperHeroController(DataContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> Get()
        {
            return Ok(await _context.SuperHeroes.ToListAsync());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<SuperHero>> Get(int id)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(id);
            
            if (dbHero == null) return BadRequest("Hero not found.");
            
            return Ok(dbHero);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> AddHero([FromBody]SuperHero hero)
        {
            _context.SuperHeroes.Add(hero);

            await _context.SaveChangesAsync(); 
                
            return Ok(await _context.SuperHeroes.ToListAsync());
        }
        
        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateHero([FromBody]SuperHero request)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(request.Id);
            
            if (dbHero == null) return BadRequest("Hero not found.");

            dbHero.Name = request.Name;
            dbHero.FirstName = request.FirstName;
            dbHero.LastName = request.LastName;
            dbHero.Place = request.LastName;

            await _context.SaveChangesAsync();
            
            return Ok(heroes);
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHero>>> Delete(int id)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(id);
            
            if (dbHero == null) return BadRequest("Hero not found.");

            heroes.Remove(dbHero);
            
            await _context.SaveChangesAsync();

            return Ok(heroes);
        }
    }
}