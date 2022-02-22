import { useEffect, useState } from "react";
import { useListaCategoriaAtividade } from "../../componentes/api";
import TabelaCategoriaAtividade from "../../componentes/CategoriaAtividade/ListaCategoriaAtividade";


export default function PaginaListaCategoriaAtividade({}){
    const [ { data: data, loading: lading, error: error, response: response }, execute ] = useListaCategoriaAtividade()

    const[categoriaAtividade, setCategoriaAtividade] = useState()

    useEffect(()=>{
        execute()
    },[])

    useEffect(()=>{
        if(data)
            setCategoriaAtividade(data)
            console.log(data)

    },[data])


    return(
        <>
        {categoriaAtividade && <TabelaCategoriaAtividade categoriaAtividade={categoriaAtividade} />}
        

        </>

    )
}

