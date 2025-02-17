import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SearchSection.module.css';

interface SearchSectionProps {
  onSearch: (term: string) => void;
}

function SearchSection({ onSearch }: SearchSectionProps) {
  const [storedValue] = useLocalStorage('searchTerm');
  const [inputValue, setInputValue] = useState(storedValue);
  const handleSearch = (term: string) => {
    onSearch(term);
  };
  return (
    <div className={styles.container}>
      <input
        type="search "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={() => handleSearch(inputValue)}>Search</button>
    </div>
  );
}

export default SearchSection;
