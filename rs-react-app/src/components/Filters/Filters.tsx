import { useEffect, useMemo, useState } from 'react';
import { ICountry } from '../../interfaces/interfaces';
import s from './Filters.module.css';

const regions = [
  'Antarctic',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

enum SortOptions {
  NameAsc = 'name ',
  NameDesc = 'nameD',
  PopulationAsc = 'populationA',
  PopulationDesc = 'populationD',
}

interface FiltersProps {
  countries: ICountry[];
  onChange: (countries: ICountry[]) => void;
}

const Filters = ({ countries, onChange }: FiltersProps) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const resultCountries = useMemo(
    () =>
      countries
        .filter((country) =>
          selectedRegion ? country.region === selectedRegion : true
        )
        .filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          switch (sortOption) {
            case SortOptions.NameAsc:
              return a.name.common.localeCompare(b.name.common);
            case SortOptions.NameDesc:
              return b.name.common.localeCompare(a.name.common);
            case SortOptions.PopulationAsc:
              return a.population - b.population;
            case SortOptions.PopulationDesc:
              return b.population - a.population;
            default:
              return 0;
          }
        }),
    [selectedRegion, searchTerm, sortOption]
  );

  useEffect(() => {
    onChange(resultCountries);
  }, [resultCountries]);

  return (
    <div className={s.filters}>
      <select onChange={(e) => setSelectedRegion(e.target.value)}>
        <option value="">Filter by region</option>
        {regions.map((region) => (
          <option key={region}>{region}</option>
        ))}
      </select>

      <input
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name..."
      />

      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value={SortOptions.NameAsc}>Name A-Z</option>
        <option value={SortOptions.NameDesc}>Name Z-A</option>
        <option value={SortOptions.PopulationAsc}>Population Asc</option>
        <option value={SortOptions.PopulationDesc}>Population Desc</option>
      </select>
    </div>
  );
};

export default Filters;
