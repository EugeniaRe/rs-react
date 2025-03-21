import { useEffect, useState } from 'react';
import { ICountry } from '../../interfaces/interfaces';
import { getCountries } from '../../servises/api';
import Country from '../Country/Country';
import s from './CountriesList.module.css';

const CountriesList = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  return (
    <>
      <div className={s.header}>
        <div>Country Name</div>
        <div>Population</div>
        <div>Region</div>
        <div>Flag</div>
      </div>
      {countries.map((country) => (
        <Country
          key={country.name.common}
          countryInfo={{
            name: country.name.common,
            population: country.population,
            region: country.region,
            flag: country.flags.svg,
          }}
        />
      ))}
    </>
  );
};

export default CountriesList;
