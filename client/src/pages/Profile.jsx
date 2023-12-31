import React from 'react'
import { useSelector } from 'react-redux'
import { jwtDecode } from "jwt-decode";


const Profile = () => {
  const { currentuser } = useSelector((state) => state.user)
  const decoded = currentuser ? jwtDecode(currentuser.token) : null
  const { photoUrl, username, email } = decoded || {};
  return (
    <div className='w-full h-[calc(100vh-72px)] bg-gray-200 p-2'>
      <div className='max-w-[600px]  m-auto '>
        <h1 className='capitalize text-center font-semibold text-[25px] tabl:text-[40px] my-4'>profile</h1>
        <img src={photoUrl} className='mx-auto my-3 rounded-full w-[80px] lg:w-[140px] tabl:w-[120px]' alt="" />
        <form className='flex justify-center flex-col items-center'>
          <input type="text" className=' w-full text-[14px] my-3 h-10 p-2 outline-2 border outline-none border-gray-500 focus:border-gray-900 focus:border-2 rounded-lg moblg:w-[380px] tabl:w-[500px] lg:w-[500px] moblg:text-[18px]' placeholder='username' />
            
          <input type="email" className='w-full text-[14px] my-3 h-10 p-2 outline-2 border outline-none border-gray-500 focus:border-gray-900 focus:border-2 rounded-lg moblg:w-[380px] tabl:w-[500px] lg:w-[500px] moblg:text-[18px]' placeholder='email' />
          <button className='bg-[#2f5d56] w-full moblg:w-[380px] tabl:w-[500px] lg:w-[500px] text-white p-2 rounded-md uppercase' >Update</button>
          <button className='bg-[#369434] w-full moblg:w-[380px] tabl:w-[500px] lg:w-[500px] text-white p-2 my-4 rounded-md uppercase' >Create Property</button>
        </form>
        <div className='flex justify-between items-center'>
          <p className='text-red-700 capitalize'>delete account</p>
          <p className='text-red-700 capitalize'>sign out</p>
        </div>
        <p className='text-center my-6 capitalize text-[#369434]'>show property</p>

      </div>
    </div>
  )
}

export default Profile