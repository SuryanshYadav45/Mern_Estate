import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);

  console.log(searchQuery);
  return (
    <div className='w-full min-h-[calc(100vh-72px)] bg-[rgba(72,71,71,0.1)]'>
        
    </div>
  )
}

export default Search