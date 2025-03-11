import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { IFormData } from '../../types/interfaces';
import { countries } from '../../constants/countries';
import s from './Uncontrolled.module.css';

export const Uncontrolled = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    acceptTerms: false,
    picture: null,
    country: '',
  });
  // const [, setErrors] = useState({});
  // const navigate = useNavigate();

  // const { validateForm } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // // const validationErrors = validateForm(formData);
    // if (Object.keys(validationErrors).length === 0) {
    //   // Dispatch to Redux
    //   // ...
    //   navigate('/');
    // } else {
    //   // setErrors(validationErrors);
    // }

    console.log('Form submitted with data:', formData);
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name "
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
          required
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age "
          id="age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          placeholder="Enter your age"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter your password"
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          placeholder="Confirm your password"
          required
        />
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
            onChange={(event) =>
              setFormData({ ...formData, acceptTerms: event.target.checked })
            }
          />
          <label htmlFor="acceptTerms">
            Accept Terms and Conditions agreement
          </label>
        </div>
        <label htmlFor="picture">Picture</label>
        <input
          type="file"
          name="picture"
          id="picture"
          onChange={(event) =>
            setFormData({
              ...formData,
              picture: event.target.files ? event.target.files[0] : null,
            })
          }
        />
        <label htmlFor="country">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={(event) =>
            setFormData({ ...formData, country: event.target.value })
          }
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};
