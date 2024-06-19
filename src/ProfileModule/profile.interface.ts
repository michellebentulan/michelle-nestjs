export interface Profile {
    id: string;
    firstname: string;
    lastname: string;
    age: number;
    avatar: string;
    gender: string;
    created_at: Date;
    created_by: string;
  }
  
  export type profiles = Profile[];