import { Routes, Route } from 'react-router-dom';
import DetailedCard from './components/DetailedCard/DetailedCard';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import ThemeProvider from './components/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="items/:id" element={<DetailedCard />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
