using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GiveAndGet.DataAccess;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace GiveAndGet
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(options =>
                options.AddPolicy("ItsAllGood",
                    builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin())
                );
                var authSettings = Configuration.GetSection("AuthenticationSettings");

                services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                     .AddJwtBearer(options =>
                         {
                            options.IncludeErrorDetails = true;
                            options.Authority = authSettings["Authority"];
                            options.TokenValidationParameters = new TokenValidationParameters
                            {
                                ValidateIssuer = true,
                                ValidIssuer = authSettings["Issuer"],
                                ValidateAudience = true,
                                ValidAudience = authSettings["Audience"],
                                ValidateLifetime = true
                            };
                        }
                    );

            //service registration
            services.AddTransient<UserRepo>(); // create new instance every time
            services.AddTransient<ChoreRepo>();
            services.AddTransient<RewardRepo>();
            services.AddSingleton<IConfiguration>(Configuration); // only create one instance and share it always
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("ItsAllGood");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
