import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const UserListing = ({data}) => {
  const navigate=useNavigate();
  const { currentuser, loading } = useSelector((state) => state.user)
  const decoded = currentuser ? jwtDecode(currentuser.token) : null
  const { id } = decoded || {};
  const [isdeleted, setisdeleted] = useState(false)

  console.log(id);
  const handleDelete=async()=>{
     try {
      const response= await fetch(`http://localhost:4000/listing/deletelisting/${data._id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "userid":id
        })
      })
      if(response.status===200)
      {
        console.log("listing deleted successfully");
        setisdeleted(true);
        toast.success('Property deleted successfully', {
          position: toast.POSITION.TOP_CENTER
        });;
      }
      else{
        console.log("error deleting the listing");
        setisdeleted(false);
        toast.error('Error deleting property', {
          position: toast.POSITION.TOP_CENTER
        });;
      }

       if(isdeleted)
       {
        return null;
       }

     } catch (error) {
      
     }
  }

  return isdeleted?null:(
    <div className='max-w-[800px] m-auto h-[80px] flex justify-between p-2 shadow-lg rounded-md my-5'>
        <div className='flex items-center flex-1 '>
            <img className='w-[100px] h-[100%] bg-cover' src={data.imageurls[0]} alt="" />
            <p className='font-semibold m-auto text-[16px] text-center  tabl:text-[25px] capitalize'>{data.propname}</p>
        </div>
        <div className='flex flex-col'>
            <button onClick={handleDelete} className='bg-red-600  p-[1px] mb-[2px] rounded-lg text-white w-[60px] h-[35px] border transition duration-300 hover:bg-white hover:border hover:text-red-600 hover:border-red-600 uppercase text-[14px]'>Delete</button>
            <button onClick={()=>navigate(`/updatelisting/${data._id}`)} className='bg-green-600 p-[1px]  rounded-lg text-white w-[60px] h-[35px] border transition duration-300 hover:bg-white hover:border hover:text-green-600 hover:border-green-600 uppercase text-[14px]'>Edit</button>
        </div>
    </div>
  )
}

export default UserListing