import { useState } from 'react';
import { ValidationError } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IFormData } from '../../types/interfaces';
import { formSchema } from '../../models/FormSchema';
import { addFormData } from '../../redux/slices/FormDataSlice';
import { RootState } from '../../redux/store';
import { CountryInput } from '../../components/CountryInput';
import s from './Uncontrolled.module.css';

export const Uncontrolled = () => {
  const navigate = useNavigate();

  const formDataList = useSelector(
    (state: RootState) => state.formData.formDataList
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
    acceptTerms: false,
    picture: null,
    country: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (data: IFormData) => {
    try {
      formSchema.validateSync(data, { abortEarly: false });
      return {};
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path && !errors[err.path]) {
            errors[err.path] = err.message;
          }
        });
        return errors;
      }
      return {};
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const file = formData.picture;
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = String(reader.result);
          const finalFormData = {
            ...formData,
            pictureBase64: base64String,
            picture: undefined,
            id: formDataList.length + 1,
          };
          dispatch(addFormData(finalFormData));
          navigate('/');
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      const errors = validateForm({
        ...formData,
        [name]: value,
      });
      setFormErrors(errors);
    }
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Enter your name"
          required
        />
        <div className={formErrors.name && s.error}>{formErrors.name}</div>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          value={formData.age}
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Enter your age"
          required
        />
        <div className={formErrors.age && s.error}>{formErrors.age}</div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Enter your email"
          required
        />
        <div className={formErrors.email && s.error}>{formErrors.email}</div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Enter your password"
          required
        />
        <div className={formErrors.password && s.error}>
          {formErrors.password}
        </div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => {
            handleChangeInput(e);
          }}
          placeholder="Confirm your password"
          required
        />
        <div className={formErrors.confirmPassword && s.error}>
          {formErrors.confirmPassword}
        </div>
        <label htmlFor="gender">Gender</label>
        <div className={s.gender}>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={formData.gender === 'male'}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={formData.gender === 'female'}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          Female
        </div>
        <div>
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            checked={formData.acceptTerms}
            onChange={(e) => {
              const { name, checked } = e.target;
              setFormData({ ...formData, [name]: checked });
              if (formErrors[name]) {
                const errors = validateForm({
                  ...formData,
                  [name]: checked,
                });
                setFormErrors(errors);
              }
            }}
          />
          <label htmlFor="acceptTerms">
            Accept Terms and Conditions agreement
          </label>
          <div className={formErrors.acceptTerms && s.error}>
            {formErrors.acceptTerms}
          </div>
        </div>
        <label htmlFor="picture">Picture</label>
        <input
          type="file"
          name="picture"
          id="picture"
          onChange={(e) => {
            const { name, files } = e.target;
            setFormData({ ...formData, [name]: files ? files[0] : null });
            if (formErrors[name]) {
              const errors = validateForm({
                ...formData,
                [name]: files ? files[0] : null,
              });
              setFormErrors(errors);
            }
          }}
        />
        <div className={formErrors.picture && s.error}>
          {formErrors.picture}
        </div>
        <CountryInput
          onChange={(country: string) => {
            setFormData({ ...formData, country: country });
            if (formErrors.country) {
              const errors = validateForm({
                ...formData,
                country,
              });
              setFormErrors(errors);
            }
          }}
        />
        <div className={formErrors.country && s.error}>
          {formErrors.country}
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
};
