using Microsoft.AspNetCore.Mvc;
using Mvc_App.Models;

namespace Mvc_App.Controllers
{
    public class HelloWorldController : Controller
    {
        public IActionResult Index()
        {
            DogViewModel dog = new DogViewModel() {Name = "Sif", Age = 2};
            return View(dog);
        }

        public IActionResult Create()
        {
            var dogVM = new DogViewModel();
            return View(dogVM);
        }

        public IActionResult CreateDog(DogViewModel dogViewModel)
        {
           // return View("Index");
           return RedirectToAction(nameof(Index));
        }

        public String Hello()
        {
            return "Whos there?";
        }
    }
}