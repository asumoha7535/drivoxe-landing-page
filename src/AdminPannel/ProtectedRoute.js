import React, { useContext } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';
function ProtectedRoute({children}) {
    const naviagte = useNavigate();
    const {isAuthenticate} = useAuth();
 return isAuthenticate ? children : naviagte('/admin')
}

export default ProtectedRoute