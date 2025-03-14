import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formSchema } from '../../models/FormSchema';
import { addFormData } from '../../redux/slices/FormDataSlice';
import { RootState } from '../../redux/store';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { IFormData } from '../../types/interfaces';
import { CountryInput } from '../../components/CountryInput/CountryInput';
import s from './ReactHookForm.module.css';

export const ReactHookForm = () => {
  const formDataList = useSelector(
    (state: RootState) => state.formData.formDataList
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (formData: IFormData) => {
    if (formData.picture) {
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
      reader.readAsDataURL(formData.picture);
    }
  };

  return (
    <>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className={s.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />
        <ErrorMessage message={errors.name?.message} />

        <label htmlFor="age">Age</label>
        <input type="text" id="age" {...register('age')} />
        <ErrorMessage message={errors.age?.message} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
        <ErrorMessage message={errors.email?.message} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')} />

        <ErrorMessage message={errors.password?.message} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword')}
        />
        <ErrorMessage message={errors.confirmPassword?.message} />

        <label htmlFor="gender">Gender</label>
        <div className={s.gender}>
          <label>
            <input type="radio" value="male" {...register('gender')} /> Male
          </label>
          <label>
            <input type="radio" value="female" {...register('gender')} /> Female
          </label>
        </div>
        <ErrorMessage message={errors.gender?.message} />

        <label>
          <input
            type="checkbox"
            id="acceptTerms"
            {...register('acceptTerms')}
          />
          Accept Terms and Conditions
        </label>
        <ErrorMessage message={errors.acceptTerms?.message} />

        <label htmlFor="picture">Picture</label>
        <Controller
          name="picture"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              type="file"
              id="picture"
              onChange={(e) =>
                onChange(e.target.files ? e.target.files[0] : null)
              }
            />
          )}
        />
        <ErrorMessage message={errors.picture?.message} />

        <Controller
          name="country"
          control={control}
          render={({ field }) => <CountryInput onChange={field.onChange} />}
        />
        <ErrorMessage message={errors.country?.message} />

        <button className={s.btn} type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};
