import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { NavMode } from "./types";

export const NavContext = createContext<NavMode>({
  pov: 'user',
  setPov: () => null,
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