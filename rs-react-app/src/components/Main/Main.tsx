import { useCallback, useEffect, useState } from 'react';
import { ICountry } from '../../interfaces/interfaces';
import { getCountries } from '../../servises/api';
import CountriesList from '../CountriesList/CountriesList';
import Filters from '../Filters/Filters';

const Main = () => {
  const [allcountries, setAllCountries] = useState<ICountry[]>([]);

  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      setAllCountries(response);
      setCountries(response);
    };

    fetchData();
  }, []);

  const handleChange = useCallback((countries: ICountry[]) => {
    setCountries(countries);
  }, []);

  return (
    <>
      <Filters countries={allcountries} onChange={handleChange} />
      <CountriesList countries={countries} />;
    </>
  );
};

export default Main;
