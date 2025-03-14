import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../redux/store';
import s from './CountryInput.module.css';

interface CountryInputProps {
  onChange: (country: string) => void;
}

export const CountryInput = ({ onChange }: CountryInputProps) => {
  const countries = useSelector(
    (state: RootState) => state.countries.countriesList
  );

  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsOpen(true);
    if (e.target.value === '') onChange('');
  };

  const selectCountry = (country: string) => {
    setSearch(country);
    setIsOpen(false);
    onChange(country);
  };

  return (
    <div className={s.country_container}>
      <label htmlFor="country">Country</label>

      <input
        className={s.country_input}
        id="country"
        type="text"
        placeholder="Enter your country"
        value={search}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className={s.country_list}>
          {filteredCountries.length > 0 ? (
            <ul className="py-1">
              {filteredCountries.map((country) => (
                <li
                  className={s.country_item}
                  key={country}
                  onClick={() => selectCountry(country)}
                >
                  {country}
                </li>
              ))}
            </ul>
          ) : (
            <div>No countries found</div>
          )}
        </div>
      )}
    </div>
  );
};
