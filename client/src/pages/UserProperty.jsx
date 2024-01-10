import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserListing from '../components/UserListing'

const UserProperty = () => {
    const [property, setproperty] = useState([])
    const { currentuser, loading } = useSelector((state) => state.user)
    const decoded = currentuser ? jwtDecode(currentuser.token) : null
    const { id } = decoded || {};

    useEffect(()=>{

        const fetchdata=async()=>{
            const res= await fetch(`http://localhost:4000/listing/userlisting/${id}`);
            const data= await res.json();
            setproperty(data);
        }
        fetchdata();

    },[])

    console.log(property);
  return (
    <div className='w-full '>
        {
            property?.map((data)=>
            {
                return <UserListing key={data._id} data={data} />
            }
            )
        }
    </div>
  )
}

export default UserProperty