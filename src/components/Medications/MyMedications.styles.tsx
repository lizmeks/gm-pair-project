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
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    gap: 0.25rem;

    h3, h4, p, ul {
        margin: 0;

        span {
            margin-right: 0.5rem;
        }
    }
`

export const DeleteButton = styled.button`
    background-color: tomato;
    border-radius: 5px;
    border: none;
    padding: 5px;
    width: 30%;
    position: relative;
    /* top: 30px; */
`

export const RefillButton = styled.button`
    background-color: dodgerblue;
    border-radius: 5px;
    border: none;
    padding: 5px;
    width: 30%;
    position: relative;
    /* top: 30px; */
    margin-right: 10px;
`

export const MedicationImage = styled.img`
    width: 50%;
    object-fit: cover;
`