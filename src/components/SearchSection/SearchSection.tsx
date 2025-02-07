import React, { useState } from 'react';
import { useGetSearchTerm } from '../../hooks/useGetSearchTerm';

interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchSectionState {
  searchTerm: string;
}

function SearchSection({ onSearch }: SearchSectionProps) {
  // const initialTerm = useGetsSearchTerm();
  // const [searchTerm, setSearchTerm] = useState(initialTerm);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value || '');
  // };

  // const handleBtnClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   const trimmedSearchTerm = searchTerm.trim();
  //   localStorage.setItem('searchTerm', trimmedSearchTerm);
  //   onSearch(trimmedSearchTerm);
  // };

  return (
    // <div className="">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded px-2 py-1"
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Search
      </button>
    // </div>
  );
}

export default SearchSection;
