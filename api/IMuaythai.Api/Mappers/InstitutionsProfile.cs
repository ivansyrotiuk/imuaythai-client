﻿using AutoMapper;
using IMuaythai.DataAccess.Models;
using IMuaythai.Models.Institutions;

namespace IMuaythai.Api.Mappers
{
    public class InstitutionsProfile:Profile
    {
        public InstitutionsProfile()
        {
            CreateMap<Institution, InstitutionModel>();
            CreateMap<Institution, GymModel>();
        }
    }
}