import React from 'react'

import { AiFillDelete } from "react-icons/ai";
import {BiPencil} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';


export default  function LinhasTabelaCategoriaAtividade({id, nome}){
    const navigate = useNavigate()
    return(
        <tr >
                
                <td style={{cursor: "pointer"}} onClick={(e) => navigate(`/categoria-atividade/${id}`)} >{nome} | {id}</td>
                <td >
                    <BiPencil /> 
                </td>
                <td >
                    <AiFillDelete    /> 
            
                </td>
            </tr>
            
        
    )
}