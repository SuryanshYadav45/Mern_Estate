import React from 'react'
import{useSelector} from "react-redux"
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({ element, ...rest }) => {
    const { currentuser } = useSelector((state) => state.user);
  
    return currentuser !== null ? (
      <Outlet/>
    ) : (
      <Navigate to="/signup" replace />
    );
  };

export default PrivateRoute