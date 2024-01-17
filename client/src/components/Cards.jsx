import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { BiSolidBath } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Cards = ({ data }) => {
const navigate=useNavigate();
  const checkout= async()=>
  {
    try {
      const response = await fetch('http://localhost:4000/payment/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          property: [
            {
              name:"product1",
              description: 'Description for Product 1',
              price: '74653',
              quantity: 2,
            },]
           }),
      });

      if (response.ok) {
        const session = await response.json();
        // Redirect the user to the checkout session URL
        window.location.href = session.url;
      } else {
        console.error('Error initiating payment:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
 

  return (
    <div onClick={()=>navigate(`/property/${data._id}`)} className="w-[330px] m-2 h-[490px] bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden cursor-pointer">

      <img className="rounded-t-lg h-[55%] bg-cover w-full hover:scale-[1.1] transition-all duration-500" src={data.imageurls[0]} alt="" />

      <div className="p-2 my-1">
        <h6 className='text-[#2b5f57]  font-semibold text-[18px] capitalize'>{data.propname}</h6>
        <p className="my-1 text-[14px] text-gray-700 capitalize flex items-center"> <FaLocationDot color='green' /> {data.address}</p>
        <p className="text-gray-700 text-[15px] my-1  line-clamp-3 text-justify" >{data.desc}</p>
        <p className='font-bold text-[#1e5e1e]'>₹{data?.price?.toLocaleString("en-IN")}</p>
        <div className='flex my-2 justify-between'>
          <div className='flex'>
            <span className='flex items-center me-2'>{data.beds} <IoBed className='mx-1' size={20} color='#2b5f57' /></span>
            <span className='flex items-center ms-2'>{data.bathrooms} <BiSolidBath className='mx-1' size={20} color='#2b5f57' /></span>
          </div>

          {data.type === "rent" ? <button onClick={checkout} className='w-[100px] h-[40px] rounded-md bg-[#398b7f] text-white'>Rent</button>
            : <button onClick={checkout} className='w-[100px] h-[40px] rounded-md bg-[#398b7f] text-white' >Buy</button>}
        </div>
      </div>
    </div>


  )
}

export default Cards