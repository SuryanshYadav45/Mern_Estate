import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Home = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      const respone = await fetch('http://localhost:4000/listing/getlisting')
      const data = await respone.json();
      setdata(data);
    }
    fetchdata();
  }, [])

  return (
    <div className=''>

      <div>
        <h3>Beginning of something new starts with buying new </h3>
      </div>

      {data.map((data) => {
        return (
          <Cards data={data} />
        )
      })}
    </div>
  )
}

export default Home