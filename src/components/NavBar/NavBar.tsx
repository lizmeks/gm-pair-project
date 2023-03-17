import { NavBarOption, Navigation, LeftRightContainers } from "./NavBar.styles"


const NavBar = () => {
    return (
        <Navigation>
            <LeftRightContainers>
                <NavBarOption to='/'>
                    Home
                </NavBarOption>
                <NavBarOption to='/medications'>
                        My Medications
                </NavBarOption>
                <NavBarOption to='/add'>
                    Add a Medication
                </NavBarOption>
                <NavBarOption to='/'>
                    About
                </NavBarOption>
            </LeftRightContainers>
            <LeftRightContainers>
                <NavBarOption to='/'>
                    My Profile
                </NavBarOption>
            </LeftRightContainers>
        </Navigation>
    )
}

export default NavBar