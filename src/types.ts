export interface User {
  id: number;
  name: string;
  email: string;
  phone_number: number;
  password: string;
}

export interface Medication {
  id: number;
  name: string;
  description: string;
  image: string;
  times: string[];
  notification: string;
  user_id: number;
  refill: boolean;
  refillStatus: boolean;
  refillRequestDate: string;
  refillResponseDate: string;
}

export interface NavMode {
  pov: string;
  setPov: (newPov: string) => void;
}
