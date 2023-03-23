import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Medication, NavMode, User } from "./types";

export const NavContext = createContext<NavMode>({
  pov: 'user',
  setPov: () => null,
});

export const UserContext = createContext({
  user: {
    id: 0,
    name: '',
    email: '',
    phone_number: 0,
    password: ''
  },
  setUser: (changedUser: User) => {}
});

// export const MedicationContext = createContext<Medication>({
export const MedicationContext = createContext({
  medications: [{
    id: 0,
    name: '',
    description: '',
    image: '',
    times: [''],
    preferred_notifications_method: '',
    user_id: 0,
    refill: false,
    refillStatus: false,
    refillRequestDate: "",
    refillResponseDate: ""
  }],
  setMedications: (medications: Medication[]) => {}
});

const App = () => {
  const [pov, setPov] = useState<string>('user');
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    phone_number: 0,
    password: ''
  });
  useEffect(() => {
    const fetchUsers = () => {
      const userData = (fetch('http://localhost:3000/users'))
        .then(res => res.json())
        .then(data => setUser(data[0]))
      return userData
    }
    fetchUsers()
  }, [])

  const [medications, setMedications] = useState<Medication[]>([{
    id: 0,
    name: '',
    description: '',
    image: '',
    times: [],
    preferred_notifications_method: '',
    user_id: 0,
    refill: false,
    refillStatus: false,
    refillRequestDate: "",
    refillResponseDate: ""
  }]);
  useEffect(() => {
    const fetchMedications = () => {
      const medData = (fetch('http://localhost:3000/medications'))
        .then(res => res.json())
        .then(data => setMedications(data))
      return medData
    }
    fetchMedications()
  }, [])

  return (
    <NavContext.Provider value={{ 
      pov:pov, 
      setPov:(changedPov) => { setPov(changedPov) } 
    }}>
      <UserContext.Provider value={{ user, setUser }}>
        <MedicationContext.Provider value={{ medications, setMedications }}>
          <NavBar pov={pov} setPov={setPov} />
          <Outlet />
        </MedicationContext.Provider>
      </UserContext.Provider>
    </NavContext.Provider>
  );
}

export default App;