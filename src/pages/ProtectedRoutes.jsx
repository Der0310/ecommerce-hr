import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

  const token = localStorage.getItem('token');


  if (token) {
    return <Outlet/>;// este da el acceso a lo q esta en protected
  } else {
    return <Navigate to='/login'/>;

  }
}

export default ProtectedRoutes;