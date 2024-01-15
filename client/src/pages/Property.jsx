import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';

const Property = () => {

    const [property, setproperty] = useState([])
    const{id}=useParams();
    useEffect(()=>
    {
        const fetchdata=async()=>
        {
            const response=await fetch(`http://localhost:4000/listing/getUserListing/${id}`)
            const data= await response.json();
            setproperty(data);
            console.log(property);
        }
        fetchdata();
    },[])

    console.log(property)

  return (
   <div className='w-full'>
    <div className='flex flex-col max-w-[1300px]  m-auto '>
    <div className='w-[100%] p-2'>
         <Swiper
         
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[100%] h-[300px] tabl:h-[500px]"
      >
        {
            property?.imageurls?.map((url,index)=>(
                <SwiperSlide key={index}><img  className='w-[100%] h-[100%] bg-contain' src={url} alt="" /></SwiperSlide>
            ))
        }
        
      </Swiper>
    </div>
    <div className='w-[100%] p-2 '>
      <h1 className='text-black font-bold text-[30px] capitalize py-2' >{property.propname}</h1>
      <p className='text-[16px] flex items-center'><FaLocationDot color='green' />{property.address}</p>
      <p className='text-justify text-[16px] py-2'>{property.desc}</p>
      <div className='flex my-2'>
        <p className='capitalize  text-[20px]'>beds: <span className='font-bold'>{property.beds}</span></p>
        <p className='capitalize mx-5 text-[20px]'>bathroom: <span className='font-bold'>{property.bathrooms}</span></p> 
        
      </div>
      <div className="flex">
      <label htmlFor="furnished" className='capitalize text-[20px] flex items-center'> furnished:
        <input id='furnished' className='w-[20px] h-[20px] mx-2' name='furnished' checked={property.furnished} type="checkbox"/>
        </label>
        <label className='ms-6 capitalize text-[20px] flex items-center ' htmlFor="parking" > parking:
        <input id='parking' name='parking' className='w-[20px] h-[20px] mx-2' checked={property.parking} type="checkbox" />
        </label>
      </div>
      
      <p className='capitalize text-[20px] my-4'>type: <span className='font-bold'>{property.type}</span></p>
      <p className='capitalize text-[20px]'>price: <span className='font-bold'>{property.price}</span> </p>

      {
        property.type==="rent"?<button className='w-[140px] h-[50px] my-5 rounded-md bg-[#398b7f] text-white'>Rent</button>
        :<button className='w-[140px] h-[50px] rounded-md bg-[#398b7f] my-5 text-white'>Sell</button>
      }
    </div>
    </div>
    </div>
  )
}

export default Property