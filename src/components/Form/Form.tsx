import {
  Root,
  Title,
  AddForm,
  InputLabel,
  TextFieldInput,
  LargeTextFieldInput,
  SelectInput,
  SubmitButton
} from './Form.styles'

const Form = () => {
  return (
    <Root>
      <Title>Add your medication</Title>
      <AddForm>
        <InputLabel htmlFor="name">
          Name
          <TextFieldInput
            type="text"
            id="name"
            placeholder='Enter medication name'
          />
        </InputLabel>
        <InputLabel htmlFor="description">
          Description
          <LargeTextFieldInput
            id="description"
            placeholder='Enter medication description. For example:&#10;-Color&#10;-Shape&#10;-Size'
          />
        </InputLabel>
        <InputLabel htmlFor='image'>
          Upload medication image (optional)
          <input
            type='file'
            accept='image/*'
            id='image'
          />
        </InputLabel>
        <InputLabel htmlFor="notification">
          Notification Preference
          <SelectInput id="notification">
            <option value=''>-Please select an option-</option>
            <option value='email'>Email</option>
            <option value='text'>Text message</option>
            <option value='phone'>Phone call</option>
          </SelectInput>
        </InputLabel>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </AddForm>
    </Root>
  )
}

export default Form