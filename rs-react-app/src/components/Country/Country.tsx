import { memo } from 'react';
import s from './Country.module.css';

interface CountryProps {
  name: string;
  population: number;
  region: string;
  flag: string;
  isVisited: boolean;

  handleVisitied: (name: string) => void;
}

const Country = memo(
  ({
    name,
    population,
    region,
    flag,
    isVisited,
    handleVisitied,
  }: CountryProps) => {
    return (
      <div
        onClick={() => handleVisitied(name)}
        className={`${s.country_container} ${isVisited ? s.visited : ''}`}
      >
        <div>{name}</div>
        <div> {population}</div>
        <div> {region}</div>
        <img src={flag} alt={name} width={50} />
      </div>
    );
  }
);

export default Country;
