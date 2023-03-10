import { NavBarOption, NavBarOptionRight, Navigation } from "./NavBar.styles"


const NavBar = () => {
    return (
        <Navigation>
            <NavBarOption to='/'>
                Home
            </NavBarOption>
            <NavBarOption to='/'>
                    My Medications
            </NavBarOption>
            <NavBarOption to='/'>
                Add a Medication
            </NavBarOption>
            <NavBarOption to='/'>
                About
            </NavBarOption>
            <NavBarOptionRight to='/'>
                My Profile
            </NavBarOptionRight>
        </Navigation>
    )
}

export default NavBar