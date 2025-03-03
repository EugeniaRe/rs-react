import DetailedCard from '../../../../components/DetailedCard/DetailedCard';

async function DetailedCardPage({
  params,
}: {
  params: Promise<{ planetId: string }>;
}) {
  const { planetId } = await params;

  return <DetailedCard planetId={planetId} />;
}

export default DetailedCardPage;
