using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GiveAndGet.DataAccess;
using GiveAndGet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace GiveAndGet.Controllers
{
    [Route("api/Chore")]
    [ApiController]
    // [Authorize]
    public class ChoreController : ControllerBase
    {
        ChoreRepo _choreRepository;
        UserRepo _userRepository;

        public ChoreController(ChoreRepo repository, UserRepo userRepository)
        {
            _choreRepository = repository;
            _userRepository = userRepository;
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

        // api/Chore/2/user/1
        [HttpPut("{choreId}/user/{userId}")]
        public IActionResult UpdateChore(int choreId, int userId)
        {
            var choreExist = _choreRepository.GetChoreById(choreId);
            if (choreExist != null)
            {
                var upDateChore = _choreRepository.UpdateUserIdOnChore(choreId, userId);
                return Ok("Updated UserId On Chore");
            }
            else return NotFound("Please Find Another Chore");
        }

        // api/Chore/user/2
        [HttpGet("user/{userId}")]
        public IActionResult GetAllChoresByUserId(int userId)
        {
     
            var choreStatusById = _choreRepository.GetAllNonCompletedOrdersByUserId(userId);
            if (choreStatusById != null) 
            { 
                return Ok(choreStatusById);
            }
            else return NotFound("Unable to updated Status");
        }

        // api/Chore/2
        [HttpPut("{choreId}")]
        public IActionResult CompleteChore(int choreId)
        {
            var choreExist = _choreRepository.GetChoreById(choreId);
            if (choreExist != null)
            {
                var choreToBeCompleted = _choreRepository.UpdateCompleteStatusOnChore(choreId);
                return Ok("Updated CompletedStatus On Chore");
            }
            else return NotFound("Unable to make chore Completed");
        }

        // api/Chore/user/2/completed
        [HttpGet("user/{userId}/completed")]
        public IActionResult GetCompletedChoresByUserId(int userId)
        {
            var completedChoreByUser = _choreRepository.GetCompletedChoresByUserId(userId);
            if (completedChoreByUser != null)
            {
                return Ok(completedChoreByUser);
            }
            else return NotFound("That User does not have any chores.");
        }

        // api/Chore/familypendingapproval/2
        [HttpGet("familypendingapproval/{userId}")]
        public IActionResult GetAllPendingChoresByFamily(int userId)
        {
            var familiesPendingChores = _choreRepository.GetAllFamiliesPendingChores(userId);
            if (familiesPendingChores != null)
            {
                return Ok(familiesPendingChores);
            }
            else return NotFound("That family does not have pending chores");
        }

        // api/Chore/approved/2/chorerewardpoint/12/user/2
        [HttpPut("approved/{choreId}/chorerewardpoint/{choreRewardPoint}/user/{userId}")]
        public IActionResult ApprovedChore(int choreId, int choreRewardPoint, int userId)
        {
            var choreExist = _choreRepository.GetChoreById(choreId);
            if (choreExist != null)
            {
                var choreToBeApproved = _choreRepository.UpdateStatusOnChore(choreId);
                if (choreToBeApproved != false)
                {
                    var addRewardPoints = _userRepository.UpdateChorePointsOnUserId(userId, choreRewardPoint);
                    if (addRewardPoints != false) return Ok(addRewardPoints);
                    
                    return NotFound("Unable to add user chore points");
                }
                else return NotFound("Unable to make chore Approved");
            }
            else return NotFound("Unable to locate chore Id");
        }
    }
}