import * as yup from 'yup';

const passwordRules = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/; 
const noTelp = /^[0-9]+$/; 

export const schemaRegister = yup.object().shape({
  firstName: yup.string().min(1).required('Required'),
  lastName: yup.string().min(1).required('Required'),
  email: yup.string().email('Please enter valid email').required('Required'),
  password: yup.string().min(4).matches(passwordRules, {message: "Please create stronger password"}).required('Required'),
  confirmPassword: yup.string().min(4).oneOf([yup.ref('password'), null], `Password don't match`).required('Required'),
  telephone: yup.string().min(7).matches(noTelp, {message: "Phone number is not valid"}).required('Required'),
  businessUnitName: yup.string().min(4).required('Required'),
  businessPhone: yup.string().min(7).matches(noTelp, {message: "Phone number is not valid"}).required('Required'),
  businessAddress: yup.string().min(5, "Must be more than 5 characters")
})