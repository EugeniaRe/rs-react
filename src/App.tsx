import { Routes, Route } from 'react-router-dom';
import SearchItem from './components/SearchItem/SearchItem';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="items/:id" element={<SearchItem />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
