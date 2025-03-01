import { useRouter } from 'next/router';
import DetailedCard from '../../src/components/DetailedCard/DetailedCard';

function DetailedCardPage() {
  const router = useRouter();

  const planetId = Array.isArray(router.query.planetId)
    ? router.query.planetId[0]
    : router.query.planetId
      ? router.query.planetId
      : '';
  console.log(planetId);

  return <DetailedCard planetId={planetId} />;
}

export default DetailedCardPage;
