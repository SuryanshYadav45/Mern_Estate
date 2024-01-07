import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { BiSolidBath } from "react-icons/bi";

const Cards = () => {
  return (
    <div>
        

<div class="w-[330px] h-[470px] bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
    
        <img class="rounded-t-lg h-[55%] bg-cover w-full hover:scale-[1.1] transition-all duration-500" src="https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693100979175luxury-home-in-dubai---3.png?alt=media&token=fa094ff8-7bc1-4c47-9028-67ae5983af27" alt="" />
    
    <div class="p-2 my-1">
        <h6 className='text-[#2b5f57]  font-semibold text-[18px] capitalize'>Vibrant Blue house of Megatron</h6>
        <p class="my-1 text-[14px] text-gray-700 capitalize flex items-center"> <FaLocationDot color='green'/> 421 Serenity Lake,South dehi</p>
        <p class="text-gray-700 text-[15px] my-1  line-clamp-3 text-justify" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptate magnam, error quia dolorem nisi veritatis officia sequi doloremque aperiam sint, eaque ducimus, consectetur aliquid similique? Ullam architecto perspiciatis sequi?</p>
        <p className='font-bold text-[#1e5e1e]'>₹10000</p>
        <div className='flex my-2'>
            <span className='flex items-center me-2'>3 <IoBed className='mx-1' size={20} color='#2b5f57'/></span>
            <span className='flex items-center ms-2'>4 <BiSolidBath className='mx-1' size={20} color='#2b5f57'/></span>
        </div>
    </div>
</div>

    </div>
  )
}

export default Cards