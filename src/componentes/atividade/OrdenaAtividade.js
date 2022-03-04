
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { listaAtividades, ordemLista } from "../../actions/actions"
import useAtividadeApi from "../api/useAtividadeApi"

export default function  OrdenaAtividade(){
    const [ordem, setOrdem] = useState()
    const [data, setData] = useState('')
    const {listarPorData, listar, response, error} = useAtividadeApi()
    
    const dispatch = useDispatch()

    useEffect(() => {
        if(response.data)
            {
                dispatch(listaAtividades(response.data))
               
               
            }

    }, [response.data])


    function ordenar(e){
        listar(e.target.value)
        dispatch(ordemLista(e.target.value))

    }
    useEffect(()=>{
        let dados = {data: data}
        if(data)
            listarPorData(data)

    }, [data])

    return(
        <div>
            <form> 
                <div className="row">
                    <div className="col">  
                        <select className="form-select" aria-label="Default select example" onChange={ordenar}>
                            <option value="ASC">Ordenar em ordem crescente</option>
                            <option value="DESC">Ordenar em ordem decrescente</option>
                        </select>
                    </div>
                   
                </div>
            </form>
        </div>
    )
}