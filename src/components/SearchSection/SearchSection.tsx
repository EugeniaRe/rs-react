interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
}

import { useState } from 'react';
import { useGetSearchTerm } from '../../hooks/useGetSearchTerm';
import { Link } from 'react-router-dom';
function SearchSection({ onSearch }: SearchSectionProps) {
  const lastSearchTerm = useGetSearchTerm();
  const [inputValue, setInputValue] = useState(lastSearchTerm);
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
      <Link to="/planets">
        <button onClick={handleSearch}>Search</button>
      </Link>
    </div>
  );
}

export default SearchSection;
