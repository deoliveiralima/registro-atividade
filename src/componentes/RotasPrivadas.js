import React from "react"
import { Navigate, Outlet } from "react-router-dom"


export default function RotasPrivadas ({token}) {
    
    
    return token ? <Outlet /> : <Navigate to="/login" />;
  
}
 