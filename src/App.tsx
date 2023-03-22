import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Medication, NavMode, User } from "./types";

export const NavContext = createContext<NavMode>({
  pov: 'user',
  setPov: () => null,
});

export const UserContext = createContext<User>({
  id: 0,
  name: '',
  email: '',
  phone_number: 0,
  password: ''
});

export const MedicationContext = createContext<Medication>({
  id: 0,
  name: '',
  description: '',
  image: '',
  times: [],
  preferred_notifications_method: '',
  user_id: 0,
  refill: false,
  refillStatus: null,
  refillRequestDate: null,
  refillResponseDate: null
});

const App = () => {
  const [pov, setPov] = useState<string>('user');

  return (
    <NavContext.Provider value={{ 
      pov:pov, 
      setPov:(changedPov) => { setPov(changedPov) } 
    }}>
      <NavBar pov={pov} setPov={setPov} />
      <Outlet />
    </NavContext.Provider>
  );
}

export default App;