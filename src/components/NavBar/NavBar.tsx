import { NavMode } from "../../types"
import { NavBarOption, Navigation, LeftRightContainers } from "./NavBar.styles"

const NavBar = (props: NavMode) => {
  const { pov, setPov } = props;

  const handleNavToggle = () => {
    console.log('nav mode: ', pov);
    pov === 'user' ? setPov('doctor') : setPov('user')
  }

  return (
    <Navigation>
      <LeftRightContainers>
        <NavBarOption to='/'>
          Home
        </NavBarOption>
        <NavBarOption to='/medications'>
          {pov === 'user' ? 'My Medications' : 'Refill Medications'}
        </NavBarOption>
        {pov === 'user' && <NavBarOption to='/add'>Add a Medication</NavBarOption>}
        <NavBarOption to='/'>
          About
        </NavBarOption>
      </LeftRightContainers>
      <LeftRightContainers>
        <NavBarOption to='/'>
          My Profile
        </NavBarOption>
        <button onClick={handleNavToggle}>{pov} mode</button>
      </LeftRightContainers>
    </Navigation>
  )
}

export default NavBar