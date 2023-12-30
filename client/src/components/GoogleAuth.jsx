import React from 'react'
import {GoogleAuthProvider, getAuth,getIdToken, signInWithPopup} from "firebase/auth"
import { app } from '../firebase';

const GoogleAuth = () => {

    const handleauth=async()=>
    {
        try {
            const provider= new GoogleAuthProvider();
            const auth=getAuth(app)
            
            const result=await signInWithPopup(auth,provider)
            const idToken=await result.user.getIdToken();
            
            const response= await fetch('http://localhost:4000/auth/signin/google',{
              method:"POST",
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({idToken})
            })

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div onClick={handleauth} className="w-full bg-white text-black border border-black  flex items-center justify-center  p-2 rounded-lg hover:cursor-pointer hover:opacity-80">
  <div className=" bg-white p-1 w-[40px] h-[30px] mx-1 flex justify-center items-center">
    <img className="size-5" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
  </div>
  <p className="text-white-400 font-400  capitalize"><b>Sign in with google</b></p>
</div>
  )
}

export default GoogleAuth