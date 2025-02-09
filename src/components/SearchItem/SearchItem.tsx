import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import Loading from '../Loading/Loading';

function SearchItem() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [planetData, setPlanetData] = useState({
    name: '',
    climate: '',
    diameter: '',
  });

  useEffect(() => {
    if (params.id) {
      getPlanet(params.id);
    }
  }, [params.id]);
  const getPlanet = async (term: string) => {
    // setSearchParams({ page: String(pageNumber), search: term });
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?search=${term}`);
      const data = await response.json();
      setPlanetData(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setPlanetData({
        name: '',
        climate: '',
        diameter: '',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>Planet: {planetData.name}</div>
      <div>Climate: {planetData.climate}</div>
      <div>Diameter: {planetData.diameter}</div>
      <Link to="/">
        <button>Close</button>
      </Link>
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default SearchItem;
