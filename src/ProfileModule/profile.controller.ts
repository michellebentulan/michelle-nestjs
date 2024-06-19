import { Controller, Get, Param } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { profiles, Profile } from "./profile.interface";

@Controller('api/user')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get('profiles')
    findAll(): profiles {
        return this.profileService.findAll();
    }

    @Get('profile/:id')
    findOne(@Param('id') id: string): Profile {
        return this.profileService.findOne(id);
    }

    
}