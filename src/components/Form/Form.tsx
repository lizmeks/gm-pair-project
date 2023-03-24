import { FieldArray, Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Root,
  Title,
  AddForm,
  InputLabel,
  TextFieldInput,
  LargeTextFieldInput,
  SelectInput,
  TimesContainer,
  RemoveTimeButton,
  AddTimeButton,
  ErrorMessage
} from './Form.styles';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object({
  name: Yup.string().required().min(3),
  description: Yup.string(),
  image: Yup.string(),
  times: Yup.array().of(
    Yup.string()
  ).min(1).required(),
  notification: Yup.string().required().oneOf(
    ['email', 'phone', 'text']
  )
});

interface Medication {
  name: string,
  description: string,
  image: string,
  times: string[],
  notification: string
}

const USER_ID = 1;

const Form = () => {

  let navigate = useNavigate()

  const medicationSubmitHandler = (data: Medication) => {
    const newMedication = {
      ...data,
      user_id: USER_ID,
      id: uuidv4()
    };
    axios.post('http://localhost:3000/medications', newMedication)
      .then(res => console.log(res.data))
      .then(() => navigate('/medications'))
      .catch(error => console.error(error.message));
  };

  return (
    <Root>
      <Title>Add your medication</Title>
      <Formik
        initialValues={{
          name: '',
          description: '',
          image: '',
          times: ['12:00'],
          notification: ''
        }}
        onSubmit={(values) => {
          medicationSubmitHandler(values);
        }}
        validationSchema={validationSchema}
      >
        { props => (
          <AddForm onSubmit={props.handleSubmit}>
            <InputLabel htmlFor="name">
              Name
              <TextFieldInput
                type="text"
                id="name"
                placeholder='Enter medication name or nickname'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
              {props.touched.name && props.errors.name && (
                <ErrorMessage>{props.errors.name}</ErrorMessage>
              )}
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
              {props.touched.description && props.errors.description && (
                <ErrorMessage>{props.errors.description}</ErrorMessage>
              )}
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
              {props.touched.image && props.errors.image && (
                <ErrorMessage>{props.errors.image}</ErrorMessage>
              )}
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
                  {props.touched.times && props.errors.times && (
                    <ErrorMessage>{props.errors.times}</ErrorMessage>
                  )}
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
              <SelectInput 
                id="notification"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.notification}
              >
                <option value=''>-Please select an option-</option>
                <option value='email'>Email</option>
                <option value='text'>Text message</option>
                <option value='phone'>Phone call</option>
              </SelectInput>
              {props.touched.notification && props.errors.notification && (
                <ErrorMessage>{props.errors.notification}</ErrorMessage>
              )}
            </InputLabel>
            <button type='submit'>Submit</button>
          </AddForm>
        )}
      </Formik>
    </Root>
  )
}

export default Form