import * as yup from 'yup';

const passwordRules = /[a-zA-Z]/; // Minimum eight characters, at least one letter and one number:

export const basicSchema = yup.object().shape({
  email:yup.string().email(" Please enter a valid email ").required(" Required "),
  password:yup.string().min(5).matches(passwordRules, {message: "Please create stronger password"}).required(" Required "),
})