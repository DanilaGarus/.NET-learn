using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Some_Entity_course.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options) {}
    
    public DbSet<SuperHero> SuperHeroes { get; set; }
}