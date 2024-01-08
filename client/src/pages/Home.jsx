import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import UserListing from '../components/UserListing'

const Home = () => {

  const [data,setdata] = useState([])

  useEffect(()=>
  {
    const fetchdata=async()=>{
      const respone=await fetch('http://localhost:4000/listing/getlisting')
      const data =await respone.json();
      setdata(data);

      
    }
    fetchdata();
  },[])

  console.log(data);
  return (
    <div>
      {/* <UserListing/> */}
   {data.map((data)=>{return(
    <Cards data={data}/>
   )})}
    </div>
  )
}

export default Home