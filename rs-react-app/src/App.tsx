import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main/Main';
import { Uncontrolled } from './pages/Uncontrolled/Uncontrolled';
import { ReactHookForm } from './pages/ReactHookForm/ReactHookForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/uncontrolled" element={<Uncontrolled />} />
        <Route path="/reacthookform" element={<ReactHookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
