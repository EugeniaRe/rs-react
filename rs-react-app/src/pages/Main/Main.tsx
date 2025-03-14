import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import s from './Main.module.css';
import { useState, useEffect } from 'react';

export const Main = () => {
  const formDataList = useSelector(
    (state: RootState) => state.formData.formDataList
  );

  const [indicationIndex, setIndicationIndex] = useState<number | null>(null);

  const reversedList = [...formDataList].reverse();

  useEffect(() => {
    if (reversedList.length > 0) {
      setIndicationIndex(0);
      setTimeout(() => {
        setIndicationIndex(null);
      }, 2000);
    }
  }, [reversedList]);

  return (
    <div>
      <h1>main</h1>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/uncontrolled">Uncontrolled Form</Link>
            </li>
            <li>
              <Link to="/reacthookform">React Hook Form</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {reversedList.map((data, index) => (
          <div
            className={`${s.data_card} ${indicationIndex === index ? s.indication : ''}`}
            key={data.id}
          >
            <h3>Form Data {data.id}</h3>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
            <p>Gender: {data.gender}</p>
            <p>Country: {data.country}</p>
            {data.pictureBase64 && (
              <img
                className={s.picture}
                src={data.pictureBase64}
                alt="Uploaded"
              />
            )}
          </div>
        ))}
      </main>
    </div>
  );
};
