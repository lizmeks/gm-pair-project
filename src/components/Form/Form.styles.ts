import styled from "styled-components";

export const Root = styled.main`
  background-color: #FDECEC;
  text-align: center;
  margin: 2rem;
`
export const Title = styled.h1`
  padding-top: .5rem;
`

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: left;
  margin-bottom: 1rem;
`

export const TextFieldInput = styled.input`
  margin-top: .25rem;
`

export const LargeTextFieldInput = styled.textarea`
  margin-top: .25rem;
  height: 8rem;
`

export const SelectInput = styled.select`
  margin-top: .25rem;
`

export const TimesContainer = styled.div`
  margin-top: 0.5rem;
`
export const RemoveTimeButton = styled.button`
  margin-left: .5rem;
`

export const AddTimeButton = styled.button`
  margin-top: 1rem;
`

export const ErrorMessage = styled.p`
  color: red;
  font-weight: normal !important;
`