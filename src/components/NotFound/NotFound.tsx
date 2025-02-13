import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="page">
      <h1>404: Page Not Found</h1>
      <Link to={'/'}>Back to Home</Link>
    </div>
  );
}

export default NotFound;
