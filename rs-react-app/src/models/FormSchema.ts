import * as yup from 'yup';
import { MAX_FILE_SIZE } from '../constants/constants';

// Password strength validation
const passwordStrengthRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      passwordStrengthRegex,
      'Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup.string().required('Gender is required'),
  acceptTerms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
  //   picture: yup
  //     .mixed()
  //     .test('fileSize', 'File too large (max 5MB)', (value) => {
  //       return !value || (value && value.size <= MAX_FILE_SIZE); // 5MB
  //     })
  //     .test('fileType', 'Unsupported File Format (only png, jpeg)', (value) => {
  //       return (
  //         !value ||
  //         (value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
  //       );
  //     }),

  picture: yup
    .mixed()
    .test('fileSize', 'File size must be less than 3MB', (value: File) => {
      return value && value.size <= MAX_FILE_SIZE;
    })
    .test('fileType', 'Only PNG and JPEG files are allowed', (value: File) => {
      return value && ['image/png', 'image/jpeg'].includes(value.type);
    })
    .required('Image is required'),
  country: yup.string().required('Country is required'),
});
