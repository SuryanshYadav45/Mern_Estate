import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from '../components/Cards';

const Search = () => {
    const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);
  const [property, setproperty] = useState([]);

  useEffect(()=>
  {
    const fetchdata=async()=>
    {
        const response= await fetch(`http://localhost:4000/listing/search?q=${query}`)
        const data= await response.json();
        setproperty(data);
        console.log(data);
    }
  fetchdata();

  },[query])

  return (
    <div className='w-full mt-[-8px] min-h-[calc(100vh-72px)] bg-[rgba(72,71,71,0.1)]'>
        {
            property?.map((property)=>
            { return (
                <Cards data={property}/>
            )})
        }
    </div>
  )
}

export default Search