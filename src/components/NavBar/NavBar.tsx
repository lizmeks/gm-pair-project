import { NavMode } from "../../types"
import { NavBarOption, Navigation, LeftRightContainers } from "./NavBar.styles"

const NavBar = (props: NavMode) => {
  const { pov, setPov } = props;

  const handleNavToggle = () => {
    console.log('nav mode: ', pov);
    if(pov === 'user') {
      setPov('doctor')
    } else {
      setPov('user')
    }
  }

  return (
    <Navigation>
      <LeftRightContainers>
        <NavBarOption to='/'>
          Home
        </NavBarOption>
        <NavBarOption to='/'>
          About
        </NavBarOption>
      </LeftRightContainers>

      {pov === 'user' && <NavBarOption to='/add' className='addMed'>+ Add Medication</NavBarOption>}
      
      <LeftRightContainers>
        <NavBarOption to='/'>
          My Profile
        </NavBarOption>
        <NavBarOption 
          to={pov === 'user' ? '/requests' : '/medications'}
          className='navToggle'
          onClick={handleNavToggle}>
            {pov} mode
        </NavBarOption>
      </LeftRightContainers>
    </Navigation>
  )
}

export default NavBar