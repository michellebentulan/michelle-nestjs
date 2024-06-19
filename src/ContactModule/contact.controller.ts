import { Controller, Get, Param, } from "@nestjs/common";
import { contact, UserContact } from "./contact.interface";
import { ContactService } from "./contact.service";

@Controller("api/contact")
export class ContactController {

        constructor(private readonly contactService: ContactService) {}
    
        @Get('all')
        findAll(): contact {
            return this.contactService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id') id: string): UserContact {
            return this.contactService.findOne(id);
        }
    

}
