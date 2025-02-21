import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useGetPlanetQuery } from '../../store/api/api';
import { skipToken } from '@reduxjs/toolkit/query';
import styles from './DetailedCard.module.css';

function DetailedCard() {
  const { id } = useParams();

  const { data: planet, isLoading: isLoadingPlanet } = useGetPlanetQuery(
    id ?? skipToken
  );

  return (
    <div className={styles.container}>
      <img src="/planet_favicon.svg" alt="planet image" />
      <div>
        <div>Planet: {planet?.name}</div>
        <div>Climate: {planet?.climate}</div>
        <div>Diameter: {planet?.diameter}</div>
      </div>

      <Link to="/">
        <button>Close</button>
      </Link>
      {isLoadingPlanet && <Loading />}
    </div>
  );
}

export default DetailedCard;
