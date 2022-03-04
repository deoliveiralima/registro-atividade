import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useObtemCategoriaAtividade } from "../../componentes/api"
import useCategoriaAtividadeApi from "../../componentes/api/useCategoriaAtividadeApi";
import ObtemCategoriaAtividade from "../../componentes/CategoriaAtividade/ObtemCategoriaAtividade"


export default function  PaginaObtemCategoriaAtividade ({}){
    const {id} = useParams();

    const {response, error, obter} = useCategoriaAtividadeApi()

    const [categoriaAtividade, setCategoriaAtividade] = useState()
    console.log("pagina categoria atividade")

    useEffect(()=>{
        obter(id)
    },[])

    useEffect(()=>{
        if(response.data){
            
        }
    },[response.data])
   

    return(
        <div className="container">  
        <div className="row">
            <div className="col">
                <h1> {response.data && response.data.nome  } </h1>
            </div>
        </div>

        <div className="row">
            <div className="col">
            {response.data && <ObtemCategoriaAtividade categoriaAtividade={response.data} /> }
            </div>
        </div>


        </div>
    )
}