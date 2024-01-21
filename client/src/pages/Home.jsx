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
    <div className="relative bg-[rgba(72, 71, 71, 0.1)]">
      <div
        className="bg-cover bg-center h-[400px]  relative "
        style={{
          backgroundImage: 'url("https://propertymarkets.news/wp-content/uploads/Fabric_1300x813.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='max-w-[1150px] relative m-auto mobxl:flex flex-col justify-center'>
        <h3 className="font-extrabold text-[25px] text-white capitalize z-10 px-4 pt-[35%] mobxl:pt-0 mobxl:mt-[100px] mobxl:text-[40px] ">
          Beginning of something <br /> <span className='text-[#a2e3e3] uppercase'>new</span>  starts with Owning a <br /> <span className='text-[#a2e3e3] uppercase'>house </span>
        </h3>
        <button className='z-10 bg-white mx-4 mt-5 w-[100px] rounded h-10'> Explore</button>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto">
        <div>
          <h4>Rental Properties</h4>
          <div>

          </div>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto">
        {data.map((data) => (
          <Cards key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Home