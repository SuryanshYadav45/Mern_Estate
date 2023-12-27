import React,{useState} from 'react'
import {Link} from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const { username, email, password } = formData;
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Add your logic to handle the signup, e.g., make an API request
    
        console.log('Form data submitted:', formData);
      };
  return (
    <div className='w-full h-[calc(100vh-72px)] flex justify-center items-center flex-col bg-gray-300 '>
      <div className='max-w-[600px] m-4 bg-white rounded-2xl shadow-xl overflow-hidden  hover:shadow-xl items-center'>
      <h2 className='font-bold text-4xl text-center my-4'>Sign Up</h2>
      <form onSubmit={handleSubmit} className='p-10 mt-8'>
        <div className='py-2'>
          {/* <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          /> */}
          <label for="input1">
            <span class="ml-2 text-[30px] text-black sm:text-base ">Enter Your Username:</span>
            <input id="input1" minlength="5"
              class="mt-1 py-3 px-5 w-full border-2 border-[#1b5051]-300 rounded-2xl outline-none placeholder:text-gray-400 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer "
              type="text" placeholder="Type something" />
            <p class="ml-2 text-xs text-pink-700 invisible peer-invalid:visible dark:text-gray-200">less than 5
              characters</p>
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='py-2'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button  type="submit">Sign Up</button>
      </form>
      </div>
      <p>
        Already have an account? <Link to="/signin">Login here</Link>
      </p>
    </div>
  )
}

export default SignUp