import React from 'react'

const UserListing = ({data}) => {
  return (
    <div className='max-w-[700px] h-[80px] flex justify-between p-2 shadow-lg rounded-md m-3'>
        <div className='flex items-center flex-1 '>
            <img className='w-[100px] h-[100%] bg-cover' src={data.imgurls[0]} alt="" />
            <p className='font-semibold m-auto text-[25px] capitalize'>{data.propname}</p>
        </div>
        <div className='flex flex-col'>
            <button className='bg-red-600 my-1 rounded-lg text-white w-[60px] h-[35px] border transition duration-300 hover:bg-white hover:border hover:text-red-600 hover:border-red-600 uppercase text-[14px]'>Delete</button>
            <button className='bg-green-600 my-1 rounded-lg text-white w-[60px] h-[35px] border transition duration-300 hover:bg-white hover:border hover:text-green-600 hover:border-green-600 uppercase text-[14px]'>Edit</button>
        </div>
    </div>
  )
}

export default UserListing