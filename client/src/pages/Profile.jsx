import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { jwtDecode } from "jwt-decode";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from "../firebase.js";

const Profile = () => {
  const [file, setfile] = useState();
  const [upPer, setupPer] = useState(0)
  const [formdata, setformdata] = useState({
    username:'',
    email:'',
    photourl:''
  })
  const { currentuser } = useSelector((state) => state.user)





  const decoded = currentuser ? jwtDecode(currentuser.token) : null
  const { photoUrl, username, email } = decoded || {};
  const fileref=useRef(null);
  
  useEffect(()=>
  {

    if(decoded){
      setformdata((prevformdata)=>({
        ...prevformdata,
        username,
        email,
        photourl:photoUrl
      }))
    }




  if(file){
      handleImageUpload(file);
    }
  },[file])

  const handleImageUpload=(file)=>
  {
    const storage = getStorage(app);
    const filename= new Date().getTime()+file.name;
    const storageRef = ref(storage,filename);

    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(progress)
    setupPer(progress);
    
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setformdata((prevformData) => ({
        ...prevformData,
        photourl: downloadURL,
      }));
      console.log('File available at', downloadURL);
    });
  }
);
  }

  console.log(upPer+"%");
  console.log(formdata)
  return (
    <div className='w-full h-[calc(100vh-72px)] bg-gray-200 p-2'>
      <div className='max-w-[600px]  m-auto '>
        <h1 className='capitalize text-center font-semibold text-[25px] tabl:text-[40px] my-4'>profile</h1>
        <input type="file" onChange={(e)=>setfile(e.target.files[0])}  hidden ref={fileref} accept='image/*'/>
        <img src={formdata.photourl} onClick={()=>fileref.current.click()} className='mx-auto my-3 rounded-full w-[80px] h-[80px] lg:w-[140px] lg:h-[140px] tabl:w-[120px] tabl:h-[120px] cursor-pointer' alt="" />
        <form className='flex justify-center flex-col items-center'>
          <input type="text" className=' w-full text-[14px] my-3 h-10 p-2 outline-2 border outline-none border-gray-500 focus:border-gray-900 focus:border-2 rounded-lg moblg:w-[380px] tabl:w-[500px] lg:w-[500px] moblg:text-[18px]' placeholder='username' />
            
          <input type="email" className='w-full text-[14px] my-3 h-10 p-2 outline-2 border outline-none border-gray-500 focus:border-gray-900 focus:border-2 rounded-lg moblg:w-[380px] tabl:w-[500px] lg:w-[500px] moblg:text-[18px]' placeholder='email' />
          <button className='bg-[#2f5d56] w-full moblg:w-[380px] tabl:w-[500px] lg:w-[500px] text-white p-2 rounded-md uppercase' >Update</button>
          <button className='bg-[#369434] w-full moblg:w-[380px] tabl:w-[500px] lg:w-[500px] text-white p-2 my-4 rounded-md uppercase' >Create Property</button>
        </form>
        <div className='flex justify-between items-center  moblg:w-[380px] tabl:w-[500px] lg:w-[500px] m-auto'>
          <p className='text-red-700 capitalize'>delete account</p>
          <p className='text-red-700 capitalize'>sign out</p>
        </div>
        <p className='text-center my-6 capitalize text-[#369434]'>show property</p>

      </div>
    </div>
  )
}

export default Profile