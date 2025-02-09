import { Routes, Route } from 'react-router-dom';
import SearchItem from '../SearchItem/SearchItem';
import App from '../../App';
import NotFound from '../NotFound/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/planets" element={<App />}>
        <Route path="/planets/:id" element={<SearchItem />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
