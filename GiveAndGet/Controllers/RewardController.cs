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
    [Route("api/Reward")]
    [ApiController]
    public class RewardController : ControllerBase
    {
        RewardRepo _rewardRepository;
        UserRepo _userRepository;
        public RewardController(RewardRepo repository, UserRepo userRepository)
        {
            _rewardRepository = repository;
            _userRepository = userRepository;
        }

        // api/Reward/createReward
        [HttpPost]
        public IActionResult CreateNewReward(Reward rewardToAdd)
        {
            var newReward = _rewardRepository.AddNewReward(rewardToAdd);
            return Created("", newReward);
        }

        // api/Reward/
        [HttpGet]
        public IActionResult GetAllRewards()
        {
            var allRewards = _rewardRepository.GetAllRewards();
            if (allRewards != null) return Ok(allRewards);
            return NotFound("There are not any rewards");
        }

        // api/Reward/available
        [HttpGet("available")]
        public IActionResult GetAllAvailableRewards()
        {
            var allAvailableRewards = _rewardRepository.GetAllAvailableRewards();
            if (allAvailableRewards != null) return Ok(allAvailableRewards);
            return NotFound("There are not any available rewards");
        }

        // api/Reward/3/user/7
        [HttpPut("{rewardId}/user/{userId}")]
        public IActionResult UpdateReward(int rewardId, int userId)
        {
            var updatedReward = _rewardRepository.UpdateReward(rewardId, userId);
            if (updatedReward == true)
            {
                var updatePointsOnUserProfile = _userRepository.UpdateUserPoints(userId, rewardId);
                return Ok( updatePointsOnUserProfile);
            }
            else return NotFound("Unable to update reward.");
        }
    }
}