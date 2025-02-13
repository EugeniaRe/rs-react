import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
}

function SearchSection({ onSearch }: SearchSectionProps) {
  const [storedValue] = useLocalStorage('searchTerm');
  const [inputValue, setInputValue] = useState(storedValue);
  const handleSearch = () => {
    localStorage.setItem('searchTerm', inputValue);
    console.log(inputValue);
    onSearch(inputValue);
  };
  return (
    <div className="">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchSection;
