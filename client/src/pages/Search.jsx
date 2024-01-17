import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from '../components/Cards';

const Search = () => {
    const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [property, setproperty] = useState([]);

  useEffect(()=>
  {
    const fetchdata=async()=>
    {
        const response= await fetch(`http://localhost:4000/listing/search?q=${query}`)
        const data= await response.json();
        setproperty(data);
    }
  fetchdata();

  },[query])

  return (
    <div className='w-full  min-h-[calc(100vh-72px)] bg-[rgba(72,71,71,0.1)]  p-2'>

        <h1 className='text-center p-3 font-semibold text-[30px] capitalize'>Search Results for:<span>{query}</span> </h1>

        <div className='w-full h-full flex'>
        {
            property?.map((property)=>
            { return (
                <Cards data={property}/>
            )})
        }
        </div>
    </div>
  )
}

export default Search