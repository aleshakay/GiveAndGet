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
    [Route("api/User")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        UserRepo _userRepository;

        public UsersController(UserRepo repository)
        {
            _userRepository = repository;
        }

        //api/User/2
        [HttpGet("{userId}")]
        public IActionResult GetSingleUserById(int userId)
        {
            var singleUserId = _userRepository.GetUserById(userId);

            if (singleUserId == null) return NotFound("User Does not exist");
            return Ok(singleUserId);

        }
    }
}