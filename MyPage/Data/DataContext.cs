using System;
using Microsoft.EntityFrameworkCore;

namespace MyPage.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext>  option) : base(option) {}
        public DbSet<Hero> Heroes => Set<Hero>();
    }
}

