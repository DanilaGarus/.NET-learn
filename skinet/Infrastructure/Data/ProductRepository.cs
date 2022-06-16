﻿using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class ProductRepository : IProductRepository
{
    private readonly StoreContext _context;

    public ProductRepository(StoreContext context)
    {
        _context = context;
    }

    public async Task<Products> GetProductsByIdAsync(int id)
    {
        return await _context.Products.FindAsync(id);
    }

    public async Task<IReadOnlyList<Products>> GetProductdsAsync()
    {
        return await _context.Products.ToListAsync();
    }
}