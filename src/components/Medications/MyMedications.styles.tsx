import styled from "styled-components";

export const MedicationsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 90%; */
`

export const MedicationTileContainer = styled.div`
    width: 750px;
    height: 300px;
    display: flex;
    border: 1px solid black;
    margin-bottom: 20px;
`

export const MedicationInfo = styled.div`
    width: 50%;
    padding: 20px;
`

export const DeleteButton = styled.button`
    background-color: tomato;
    border-radius: 5px;
    border: none;
    padding: 5px;
    width: 20%;
    position: relative;
    top: 45px;
`

export const MedicationImage = styled.img`
    width: 50%;
    object-fit: cover;
`