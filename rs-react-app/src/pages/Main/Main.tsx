import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <h1>main</h1>
      <nav>
        <ul>
          <li>
            <Link to="/uncontrolled">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/reacthookform">React Hook Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
