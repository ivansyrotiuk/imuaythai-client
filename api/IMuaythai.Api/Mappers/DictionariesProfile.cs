﻿using AutoMapper;
using IMuaythai.DataAccess.Models;
using IMuaythai.Models.Dictionaries;

namespace IMuaythai.Api.Mappers
{
    public class DictionariesProfile:Profile
    {
        public DictionariesProfile()
        {
            CreateMap<Round, RoundModel>();
            CreateMap<KhanLevel, KhanLevelModel>();
            CreateMap<ContestRange, ContestRangeModel>();
            CreateMap<ContestType, ContestTypeModel>();
            CreateMap<WeightAgeCategory, WeightAgeCategoryModel>();

            CreateMap<ContestTypePoints, ContestPointsModel>()
                .ForMember(dest => dest.ContestRange,
                    opt => opt.MapFrom(src => src.ContestRange ?? new ContestRange()))
                .ForMember(dest => dest.ContestType,
                    opt => opt.MapFrom(src => src.ContestType ?? new ContestType()));

            CreateMap<FightStructure, FightStructureModel>()
                .ForMember(dest => dest.WeightAgeCategory,
                    opt => opt.MapFrom(src => src.WeightAgeCategory ?? new WeightAgeCategory()))
                .ForMember(dest => dest.Round,
                    opt => opt.MapFrom(src => src.Round ?? new Round()));

            CreateMap<ContestCategory, ContestCategoryModel>()
                .ForMember(dest => dest.ContestPoints,
                    opt => opt.MapFrom(src => src.ContestTypePoints ?? new ContestTypePoints()))
                .ForMember(dest => dest.FightStructure,
                    opt => opt.MapFrom(src => src.FightStructure ?? new FightStructure()));


            CreateMap<ContestCategoryModel, ContestCategory>();
            CreateMap<WeightAgeCategoryModel, WeightAgeCategory>();
            CreateMap<ContestPointsModel, ContestTypePoints>();
            CreateMap<ContestRangeModel, ContestRange>();

        }
    }
}