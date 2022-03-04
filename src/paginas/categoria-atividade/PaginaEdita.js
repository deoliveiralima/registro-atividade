
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useCategoriaAtividadeApi from "../../componentes/api/useCategoriaAtividadeApi";
import { FormCategoriaAtividade } from "../../componentes/CategoriaAtividade";
import { Alert, Card } from "../../componentes/compartilhado";


export default function PaginaEditaCategoriaAtividade(){
    const alert = useSelector(state => state.alert)
    const {obter, response, error} = useCategoriaAtividadeApi()
    const {id} = useParams();
    const [categoria, setCategoria] = useState()

    useEffect(()=>{
        obter(id)
    },[])
    useEffect(()=>{
        if(response.data)
            setCategoria(response.data)
            
    },[response.data])



    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    { categoria && <Card titulo={"Adicionar Atividade"} component = {<FormCategoriaAtividade categoria={categoria} />} /> }
                    <Alert alert={alert} />
                </div>
            </div>
        </div>
    )
}