import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import { css } from '@emotion/react';
import { PulseLoader } from 'react-spinners';

const SignIn = () => {
  const [loading, setloading] = useState(false)
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const override =css `
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  `;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    setloading(true)
    try {
      const response=await fetch("http://localhost:4000/auth/signin",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    setloading(false)
    if(response.status===200)
    {
      navigate('/')
    }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-[calc(100vh-72px)] flex justify-center items-center flex-col bg-gray-300 '>
      <div className='m-4 bg-white rounded-2xl shadow-xl overflow-hidden  hover:shadow-xl items-center'>
        <h2 className='font-bold text-4xl text-center mt-4 text-[#1b5051] uppercase'>Sign In</h2>
        <form onSubmit={handleSubmit} className='p-5 w-full gap-7 flex flex-col'>
        
          <input type="email"
            name='email'
            autoComplete='off'
            onChange={handleChange}
            className='w-[250px] text-[14px]  h-9 p-2 outline-2 border outline-none border-gray-500 focus:border-gray-900 focus:border-2 rounded-lg moblg:w-[320px] tabl:w-[320px] lg:w-[400px] moblg:text-[18px]'
            placeholder='Enter Your Email' 
            required/>
          <input type="password"
            name="password"
            onChange={handleChange}
            className='w-[250px] text-[14px]  h-9 p-2 outline-2 border outline-none border-gray-500 focus:border-gray-900 focus:border-2 rounded-lg moblg:w-[320px] tabl:w-[320px] lg:w-[400px] moblg:text-[18px]'
            placeholder='Enter Your Password'
            required />
          <button disabled={loading==true} type="submit" className='bg-[#1b5051] text-white p-2 rounded-md capitalize' >{loading? <PulseLoader color={'#F3F8FF'}  css={override} size={12} />:"Sign In"}</button>
        </form>
      </div>
      <p>
        Don't have an account? <Link to="/signup" className='cursor-pointer text-[#1b5051]'>SignUp</Link>
      </p>
    </div>
  )
}

export default SignIn