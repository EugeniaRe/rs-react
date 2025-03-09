import DetailedCard from '../../../../components/DetailedCard/DetailedCard';
import { BASE_URL } from '../../../../constants';
import { IResultData, IResultItem } from '../../../../interfaces/interfaces';

export async function generateStaticParams() {
  let data: IResultData;
  const planetIdsArray: Array<{ planetId: string }> = [];
  let page = 1;
  do {
    const planets = await fetch(`${BASE_URL}?page=${page}`);
    if (!planets.ok) {
      throw new Error(`Error! status: ${planets.status}`);
    }
    data = await planets.json();
    page++;

    data.results.forEach((planet: IResultItem) =>
      planetIdsArray.push({
        planetId: planet.url.split('/')[5],
      })
    );
  } while (data.next !== null);
  return planetIdsArray;
}
async function DetailedCardPage({
  params,
}: {
  params: Promise<{ planetId: string }>;
}) {
  const { planetId } = await params;

  return <DetailedCard planetId={planetId} />;
}

export default DetailedCardPage;
