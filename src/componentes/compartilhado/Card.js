import React from "react";

export default function Card({titulo, component: Component}){

    return(
        <div className="card text-center">
            <div className="card-header">
                {titulo}
            </div>
            <div className="card-body">
                {Component}
                
            </div>

        </div>
    )

}