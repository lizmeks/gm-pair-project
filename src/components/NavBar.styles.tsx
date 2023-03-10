import styled from "styled-components";
import { Link } from "react-router-dom"

export const Navigation = styled.nav`
    padding: 10px;
    overflow: hidden;
    background-color: lightgrey;
`

export const NavBarOption = styled(Link)`
    float: left;
    padding: 10px;
    text-decoration: none;
    color: black;
`

export const NavBarOptionRight = styled(Link)`
    float: right;
    padding: 10px;
    text-decoration: none;
    color: black;
`