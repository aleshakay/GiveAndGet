using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GiveAndGet.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GiveAndGet.Controllers
{
    [Route("api/Chore")]
    [ApiController]
    public class ChoreController : ControllerBase
    {
        ChoreRepo choreRepository;
    }
}