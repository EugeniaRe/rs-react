import Link from 'next/link';
import useThemeContext from '../../hooks/useThemeContext';
import styles from './Header.module.css';

function Header() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={styles.header}>
      <Link href={'/'} className={styles.logo}>
        SW Planets
      </Link>
      <button className={styles.theme_btn} onClick={toggleTheme}>
        {`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
      </button>
    </div>
  );
}

export default Header;
