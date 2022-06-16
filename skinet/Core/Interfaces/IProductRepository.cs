using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<Products> GetProductsByIdAsync(int id);
    Task<IReadOnlyList<Products>> GetProductdsAsync();
}