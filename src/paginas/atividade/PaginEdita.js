import React from "react";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useAtividadeApi from "../../componentes/api/useAtividadeApi";

import FormAtividade from "../../componentes/atividade/Form";
import { Alert, Card } from "../../componentes/compartilhado";


export default function PaginaEditaAtividade({}){
    const alert = useSelector(state => state.alert)

    const [atividade, setAtividade] = useState()
    const {editar, response, error} = useAtividadeApi()
    const {id} = useParams();


    useEffect(()=>{
        if(id)
            editar(id)
    },[])

    useEffect(()=>{
        if(response.data)
            setAtividade(response.data)

    },[response])




    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card titulo={"Adicionar Atividade"} component = {atividade&& <FormAtividade atividade={atividade} /> }  /> 
                    <Alert alert={alert} />
                </div>
            </div>
        </div>
 
    )
}