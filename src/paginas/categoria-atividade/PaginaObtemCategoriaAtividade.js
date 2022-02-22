import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useObtemCategoriaAtividade } from "../../componentes/api"
import ObtemCategoriaAtividade from "../../componentes/CategoriaAtividade/ObtemCategoriaAtividade"


export default function  PaginaObtemCategoriaAtividade ({}){
    const {categoriaAtividadeId} = useParams();

    const [ { data: data, loading: lading, error: error, response: response }, execute ] = useObtemCategoriaAtividade()

    const [categoriaAtividade, setCategoriaAtividade] = useState()

    useEffect(()=>{
        execute({id: categoriaAtividadeId})
    },[])

    useEffect(()=>{
        if(data){
            setCategoriaAtividade(categoriaAtividade)
        }
        execute()
    },[data])

    return(
        <div className="container">  
        {categoriaAtividade && <ObtemCategoriaAtividade categoriaAtividade={categoriaAtividade} /> }

        </div>
    )
}