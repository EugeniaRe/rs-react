import { useState } from 'react';
import { useGetSearchTerm } from '../../hooks/useGetSearchTerm';

interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
}

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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchSection;
