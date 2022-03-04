import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import Sidebar from "../componentes/layout/Sidebar";


export default function RotasPrivadas ({token}) {
    const pagina = (
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <Sidebar/>
                </div>
                <div className="col-11">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
    
    
    return token ? pagina : <Navigate to="/login" />;
  
}
 