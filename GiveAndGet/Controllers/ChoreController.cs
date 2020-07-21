using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GiveAndGet.DataAccess;
using GiveAndGet.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GiveAndGet.Controllers
{
    [Route("api/Chore")]
    [ApiController]
    public class ChoreController : ControllerBase
    {
        ChoreRepo _choreRepository;

        public ChoreController(ChoreRepo repository)
        {
            _choreRepository = repository;
        }

        //api/Chore/
        [HttpGet]
        public IActionResult GetAllChores()
        {
            var allChores = _choreRepository.GetAllChores();
            var noChores = !allChores.Any();
            if (noChores) return NotFound("There are no chores at this time");
            return Ok(allChores);
        }

        //api/Chore/
        [HttpPost]
        public IActionResult CreateNewChore(Chore choreToAdd)
        {
            var newChore = _choreRepository.AddNewChore(choreToAdd);
            return Created("", newChore);
        }
    }
}