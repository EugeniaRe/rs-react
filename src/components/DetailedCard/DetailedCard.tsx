'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { skipToken } from '@reduxjs/toolkit/query';
import Loading from '../Loading/Loading';
import { useGetPlanetQuery } from '../../store/api/api';
import styles from './DetailedCard.module.css';

function DetailedCard({ planetId }: { planetId: string }) {
  const searchParams = useSearchParams();

  const { data: planet, isLoading: isLoadingPlanet } = useGetPlanetQuery(
    planetId ?? skipToken
  );

  return (
    <div className={styles.container}>
      <div className={styles.img_wrapper}>
        <Image src="/planet-img.svg" alt="planet image" fill />
      </div>
      <div>
        <div>Planet: {planet?.name}</div>
        <div>Climate: {planet?.climate}</div>
        <div>Diameter: {planet?.diameter}</div>
      </div>

      <Link
        href={{
          pathname: '/',
          query: { page: `${searchParams.get('page') ?? 1}` },
        }}
      >
        <button>Close</button>
      </Link>
      {isLoadingPlanet && <Loading />}
    </div>
  );
}

export default DetailedCard;
