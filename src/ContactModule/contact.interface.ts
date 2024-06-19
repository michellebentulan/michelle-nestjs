export interface UserContact {
    id: string;
    contact_type: string;
    contact_category: 'work' | 'personal';
    contact_value: string;
    user_id: string;
    created_at: Date;
    created_by: string;
  }
  
  export type contact = UserContact[];