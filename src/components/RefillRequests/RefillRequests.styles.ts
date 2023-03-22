import styled from "styled-components";

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  `

export const RefillListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #FDECEC;
  padding: 0.5rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  `

export const TextContainer = styled.div`
  width: 40%;

  div {
    margin: 0.5rem 0 0.5rem 0;
  }

  p {
    margin: 0;
  }
  `

export const InfoTitle = styled.p`
    font-weight: 600;
    border-bottom: 1px solid black;
  `

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    padding: 2rem;

    button {
      margin: 1rem 0 1rem 0;
    }
  `