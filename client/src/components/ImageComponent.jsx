import React from 'react'

const ImageComponent = (data) => {
  return (
    <div className='w-full shadow-lg bg-white flex rounded-md justify-between items-center p-2 my-2'>
        <img src={data.data} className='w-[120px] h-[40px] bg-cover' alt="" />
        <button className='w-[80px] h-[40px] border border-red-700 text-red-700 px-4 py-2 rounded focus:outline-none focus:border-red-700 focus:text-red-700'>Delete</button>
    </div>
  )
}

export default ImageComponent