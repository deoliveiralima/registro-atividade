import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useObtemCategoriaAtividade } from "../../componentes/api"
import useCategoriaAtividadeApi from "../../componentes/api/useCategoriaAtividadeApi";
import ObtemCategoriaAtividade from "../../componentes/CategoriaAtividade/ObtemCategoriaAtividade"


export default function  PaginaObtemCategoriaAtividade ({}){
    const {categoriaAtividadeId} = useParams();

    const {response, error, obter} = useCategoriaAtividadeApi()

    const [categoriaAtividade, setCategoriaAtividade] = useState()

    useEffect(()=>{
        obter(categoriaAtividadeId)
    },[])

    useEffect(()=>{
        if(response.data){
  
        }
    },[response.data])
   

    return(
        <div className="container">  
        {response.data && <ObtemCategoriaAtividade categoriaAtividade={response.data} /> }

        </div>
    )
}