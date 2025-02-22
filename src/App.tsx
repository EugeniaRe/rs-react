import { Routes, Route } from 'react-router-dom';
import DetailedCard from './components/DetailedCard/DetailedCard';
import NotFound from './components/NotFound/NotFound';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="items/:id" element={<DetailedCard />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
