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
        public IActionResult GetAllAvailableChores()
        {
            var allAvailableChores = _choreRepository.GetAllAvailableChores();
            var noChores = !allAvailableChores.Any();
            if (noChores) return NotFound("There are no chores at this time");
            return Ok(allAvailableChores);
        }

        //api/Chore/
        [HttpPost]
        public IActionResult CreateNewChore(Chore choreToAdd)
        {
            var newChore = _choreRepository.AddNewChore(choreToAdd);
            return Created("", newChore);
        }

        // api/Chore/1
        [HttpGet("{choreId}")]
        public IActionResult GetChoreById(int choreId)
        {
            var singleChore = _choreRepository.GetChoreById(choreId);
            if (singleChore != null)
            {
                return Ok(singleChore);
            }
            else return NotFound("That Chore does not exist.");
        }



    }
}