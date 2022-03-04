import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { funcListarAtividades, listaAtividades } from "../actions/actions";
import useAtividadeApi from "../componentes/api/useAtividadeApi";
import ListaAtividades from "../componentes/atividade/ListaAtividades";
import OrdenaAtividade from "../componentes/atividade/OrdenaAtividade";


export default function Inicio(){
    const {listar, response, error} = useAtividadeApi()

    const [atividades, setAtividades] = useState()
    const dispatch = useDispatch()

    useEffect(()=>{
        listar()

    },[])
    useEffect(()=>{
        if(response.data){
            
            dispatch(listaAtividades(response.data))
            dispatch(funcListarAtividades(listar))
        }
           

    },[response.data])



    return (
        <div className="d-flex justify-content-center">
           

        <div className="d-flex flex-column bd-highlight justify-content-center">

        <Link to="/atividade/salva" className="btn btn-success mt-2" > Adiciona atividade</Link>

            <div className="p-2 bd-highlight"><OrdenaAtividade /></div>
            <div className="p-2 bd-highlight"><ListaAtividades  /></div>
            
        </div>

            
            
        </div>
    )
}