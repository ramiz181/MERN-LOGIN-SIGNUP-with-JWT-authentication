import React from 'react'
import { Navigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm';

export default function ProtectedRouting({ children }) {

    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? children : <Navigate to="/auth" />

}