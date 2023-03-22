import styled from "styled-components";
import { Link } from "react-router-dom"

export const Navigation = styled.nav`
    padding: 10px;
    background-color: lightgrey;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const LeftRightContainers = styled.div`
    display: flex;
    // Adding additional padding on right because "my profile" option unexpectedly flush with right side, will revisit if extra time
    padding-right: 10px;
`

export const NavBarOption = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: black;
    text-align: center;

    &.addMed {
        background-color: #FFCA3A;
    }

    &.navToggle {
        background-color: #F97F77;
        width: 120px;
    }
`