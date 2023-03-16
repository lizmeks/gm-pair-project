import { FieldArray, Formik, Field } from 'formik';
import {
  Root,
  Title,
  AddForm,
  InputLabel,
  TextFieldInput,
  LargeTextFieldInput,
  SelectInput,
  SubmitButton,
  TimesContainer,
  RemoveTimeButton,
  AddTimeButton
} from './Form.styles'

const Form = () => {

  return (
    <Root>
      <Title>Add your medication</Title>
      <Formik
        initialValues={{
          name: '',
          description: '',
          image: '',
          times: ['12:00']
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        { props => (
          <AddForm onSubmit={props.handleSubmit}>
            <InputLabel htmlFor="name">
              Name
              <TextFieldInput
                type="text"
                id="name"
                placeholder='Enter medication name'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
            </InputLabel>
            <InputLabel htmlFor="description">
              Description
              <LargeTextFieldInput
                id="description"
                placeholder='Enter medication description. For example:&#10;-Color&#10;-Shape&#10;-Size'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.description}
              />
            </InputLabel>
            <InputLabel htmlFor='image'>
              Upload medication image (optional)
              <input
                type='file'
                accept='image/*'
                id='image'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.image}
              />
            </InputLabel>
            <FieldArray
              name='times'
              render={arrayHelpers => (
                <div>
                  <p>Reminder times</p>
                  {props.values.times.map((_time, index) => (
                    <TimesContainer key={index}>
                      <Field 
                        name={`times.${index}`}
                        type='time'
                      />
                      <RemoveTimeButton
                        type='button'
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </RemoveTimeButton>
                    </TimesContainer>
                  ))}
                  <AddTimeButton
                    type='button'
                    onClick={() => arrayHelpers.push('12:00')}
                  >
                    +Add Reminder
                  </AddTimeButton>
                </div>
              )}
            />
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
        )}
      </Formik>
    </Root>
  )
}

export default Form