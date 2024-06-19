import { Injectable } from "@nestjs/common";
import { contact, UserContact } from "./contact.interface";


@Injectable()
export class ContactService {

    private contact: contact = [
        {

            id: '1',
            contact_type: 'michelle@gmail.com',
            contact_category: 'personal',
            contact_value: '09634491842',
            user_id: '1',
            created_at: new Date('2024-06-15'),
            created_by: 'admin',
                    
        },
   
        
        {
    
            id: '2',
            contact_type: 'hade@gmail.com',
            contact_category: 'work',
            contact_value: '09100056575',
            user_id: '2',
            created_at: new Date('2024-06-19'),
            created_by: 'admin',
            
        },

        {
    
            id: '3',
            contact_type: 'ares@gmail.com',
            contact_category: 'personal',
            contact_value: '09100056575',
            user_id: '3',
            created_at: new Date('2024-06-10'),
            created_by: 'admin',
            
        },

        {
    
            id: '4',
            contact_type: 'vayrre@gmail.com',
            contact_category: 'work',
            contact_value: '09634491872',
            user_id: '4',
            created_at: new Date('2024-06-15'),
            created_by: 'admin',
            
        },
    
      ];
    
        findAll(): contact {
    
            return this.contact;
    
        }
    
        findOne(id: string): UserContact | undefined {
            return this.contact.find(contact => contact.id === id);
        }

}