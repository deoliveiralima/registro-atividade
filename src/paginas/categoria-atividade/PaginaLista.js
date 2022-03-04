import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { funcListarCategoria } from "../../actions/actions";
import useCategoriaAtividadeApi from "../../componentes/api/useCategoriaAtividadeApi";

import TabelaCategoriaAtividade from "../../componentes/CategoriaAtividade/ListaCategoriaAtividade";


export default function PaginaListaCategoriaAtividade({}){
    

    const[categoriaAtividade, setCategoriaAtividade] = useState()
    const {listar, response, error} = useCategoriaAtividadeApi()
    const dispatch = useDispatch()

    useEffect(()=>{
        listar()
        dispatch(funcListarCategoria(listar))
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

