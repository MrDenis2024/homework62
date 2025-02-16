export interface CharacterItems {
  id: string;
  hasItem: boolean;
  clicked: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}

export interface UserMutation {
  name: string;
  email: string;
  active: boolean;
  role: string;
}