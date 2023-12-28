import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import { app } from '../firebase';

const GoogleAuth = () => {

    const handleauth=async()=>
    {
        try {
            const provider= new GoogleAuthProvider();
            const auth=getAuth(app)
            
            const result=await signInWithPopup(auth,provider)
            console.log(result)

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div onClick={handleauth} class="w-full bg-[#4285f4] text-white flex items-center justify-center  p-2 rounded-lg hover:cursor-pointer hover:opacity-80">
  <div class=" bg-white p-1 w-[40px] h-[30px] mx-1 flex justify-center items-center">
    <img class="size-5" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
  </div>
  <p class="text-white-400 font-400  capitalize"><b>Sign in with google</b></p>
</div>
  )
}

export default GoogleAuth