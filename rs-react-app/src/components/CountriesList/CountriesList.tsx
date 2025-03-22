import { useCallback, useEffect, useState } from 'react';
import { ICountry } from '../../interfaces/interfaces';
import Country from '../Country/Country';
import s from './CountriesList.module.css';

interface CountiresListProps {
  countries: ICountry[];
}

const CountriesList = ({ countries }: CountiresListProps) => {
  const storedVisitedCountries = JSON.parse(
    localStorage.getItem('visitedCountries') || '[]'
  );

  const [visitedCountries, setVisitedCountries] = useState(
    new Set(storedVisitedCountries)
  );

  useEffect(() => {
    localStorage.setItem(
      'visitedCountries',
      JSON.stringify(Array.from(visitedCountries))
    );
  }, [visitedCountries]);

  const handleCountryClick = useCallback((name: string) => {
    setVisitedCountries((prev) => {
      if (prev.has(name)) {
        return prev;
      }
      const newSet = new Set(prev);
      newSet.add(name);

      return newSet;
    });
  }, []);

  const checkIsVisited = useCallback((name: string) => {
    return visitedCountries.has(name);
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
          handleVisitied={handleCountryClick}
          name={country.name.common}
          population={country.population}
          region={country.region}
          flag={country.flags.svg}
          isVisited={checkIsVisited(country.name.common)}
        />
      ))}
    </>
  );
};

export default CountriesList;
