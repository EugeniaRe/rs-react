import Link from 'next/link';
import styles from '../../../styles/404.module.css';

function NotFound() {
  return (
    <div className={styles.page}>
      <h1>404: Page Not Found</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
