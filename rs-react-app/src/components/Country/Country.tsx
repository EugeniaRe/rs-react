import s from './Country.module.css';

interface CountryProps {
  countryInfo: {
    name: string;
    population: number;
    region: string;
    flag: string;
  };
}

const Country = ({
  countryInfo: { name, population, region, flag },
}: CountryProps) => {
  return (
    <div className={s.country_container}>
      <div>{name}</div>
      <div> {population}</div>
      <div> {region}</div>
      <img src={flag} alt={name} width={50} />
    </div>
  );
};

export default Country;
