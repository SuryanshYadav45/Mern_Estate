import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';

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


  return (
   <div className='w-full'>
    <div className='max-w-[1200px] m-auto'>
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
    </div>
  )
}

export default Property