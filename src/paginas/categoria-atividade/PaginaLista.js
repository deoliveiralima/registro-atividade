import { useEffect, useState } from "react";
import useCategoriaAtividadeApi from "../../componentes/api/useCategoriaAtividadeApi";

import TabelaCategoriaAtividade from "../../componentes/CategoriaAtividade/ListaCategoriaAtividade";


export default function PaginaListaCategoriaAtividade({}){
    

    const[categoriaAtividade, setCategoriaAtividade] = useState()
    const {listar, response, error} = useCategoriaAtividadeApi()

    useEffect(()=>{
        listar()
    },[])

    useEffect(()=>{
        if(response.data)
            setCategoriaAtividade(response.data)
            

    },[response.data])


    return(
        <>
        {categoriaAtividade && <TabelaCategoriaAtividade categoriaAtividade={categoriaAtividade} />}
        

        </>

    )
}

