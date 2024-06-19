import { Injectable, Get } from "@nestjs/common";
import { profiles, Profile } from "./profile.interface";

@Injectable()
export class ProfileService {

    private profiles: profiles = [
    {

        id: '1',
        firstname: 'Michelle',
        lastname: 'Bentulan',
        age: 21,
        avatar: 'https://cdn.imgchest.com/files/pyvdcbpj89y.png',
        gender: 'Female',
        created_at:  new Date('2024-06-19'),
        created_by: 'admin',
        
    },

    {

        id: '2',
        firstname: 'Hades',
        lastname: 'Reigo',
        age: 30,
        avatar: 'https://64.media.tumblr.com/691835492eb116bf86ac8df349e89e4f/5ab755038c39a6ed-49/s500x750/5bfb4134f66df81a78c8cc844bf7d969a9608e4f.jpg',
        gender: 'Male',
        created_at:  new Date('2024-06-19'),
        created_by: 'admin',
        
    },

    {

        id: '3',
        firstname: 'Ares',
        lastname: 'Hidalgo',
        age: 31,
        avatar: 'https://64.media.tumblr.com/691835492eb116bf86ac8df349e89e4f/5ab755038c39a6ed-49/s500x750/5bfb4134f66df81a78c8cc844bf7d969a9608e4f.jpg',
        gender: 'Male',
        created_at:  new Date('2024-06-10'),
        created_by: 'admin',
        
    },

    {

        id: '4',
        firstname: 'Hades',
        lastname: 'Reigo',
        age: 34,
        avatar: 'https://64.media.tumblr.com/691835492eb116bf86ac8df349e89e4f/5ab755038c39a6ed-49/s500x750/5bfb4134f66df81a78c8cc844bf7d969a9608e4f.jpg',
        gender: 'Male',
        created_at:  new Date('2024-06-15'),
        created_by: 'admin',
        
    },

  ];

    findAll(): profiles {

        return this.profiles;

    }

    findOne(id: string): Profile | undefined {
        return this.profiles.find(profile => profile.id === id);
    }


}