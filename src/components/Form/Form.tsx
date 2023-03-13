import { useState } from 'react';
import { useFormik, FieldArray } from 'formik';
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

  const [timeInputs, setTimeInputs] = useState([
    {
      value: '12:00',
      key: 1
    }
  ]);

  const handleTimeInputIncrease = () => {
    setTimeInputs([
      ...timeInputs,
      {
        value: '12:00',
        key: timeInputs.length + 1
      }
    ]);
  }

  const handleTimeInputChange = (event: any) => {
    const inputIndex = event.target.id.replaceAll(/[a-z]/gi, '') - 1;
    timeInputs[inputIndex].value = event.target.value;
    setTimeInputs([...timeInputs]);
  }

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
        <div>
          <p>Reminder times</p>
          {timeInputs.map(element => {
            return (
              <input
                key={element.key}
                id={`timeInput${element.key}`}
                type='time'
                value={element.value}
                onChange={handleTimeInputChange}
              />
            )
          })}
          <button
            onClick={handleTimeInputIncrease}
            type='button'
          >
            +Add Reminder
          </button>
        </div>
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