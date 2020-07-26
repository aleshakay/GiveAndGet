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
        public RewardController(RewardRepo repository)
        {
            _rewardRepository = repository;
        }

        // api/Reward/createReward
        [HttpPost]
        public IActionResult CreateNewReward(Reward rewardToAdd)
        {
            var newReward = _rewardRepository.AddNewReward(rewardToAdd);
            return Created("", newReward);
        }
    }
}