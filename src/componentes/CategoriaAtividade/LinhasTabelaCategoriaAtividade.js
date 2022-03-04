import React,{useEffect} from 'react'

import { AiFillDelete } from "react-icons/ai";
import {BiPencil} from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useCategoriaAtividadeApi from '../api/useCategoriaAtividadeApi';


export default  function LinhasTabelaCategoriaAtividade({id, nome}){
    const navigate = useNavigate()
    const {excluir, response, error} = useCategoriaAtividadeApi()
    const listar = useSelector(state => state.funcListarCategoria)
    
    useEffect(() => {
       if(response.data){
        listar()
       }
        
    },[response.data])

    return(
        <tr >
                
                <td style={{cursor: "pointer"}} onClick={(e) => navigate(`/categoria-atividade/${id}`)} >{nome} </td>
                <td >
                    <BiPencil onClick={(e) => {navigate('/categoria-atividade/editar/'+id)}}  style={{cursor: "pointer"}} /> 
                </td>
                <td >
                    <AiFillDelete onClick={(e)=> excluir(id) } style={{cursor: "pointer"}}    /> 
            
                </td>
            </tr>
            
        
    )
}