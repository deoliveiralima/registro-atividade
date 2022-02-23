import React from "react";

import { useSelector } from "react-redux";
import LinhasTabelaCategoriaAtividade from "./LinhasTabelaCategoriaAtividade";


export default function TabelaCategoriaAtividade({categoriaAtividade}){
    const links = useSelector(state => state.links)
  
    
    console.log(categoriaAtividade)
    return(
        <table className="table table-hover table-striped table-bordered" >
                    <thead>
                        <tr>
                        <th className="col-4" scope="col">Nome</th>
                        <th colSpan="2" className="col-3 text-center " scope="col"> Opções </th>
                        </tr>
                    </thead>
                    <tbody> 
                        { categoriaAtividade && categoriaAtividade.map( (categoriaAtividade, i) => (
                            <React.Fragment key={i}>
                                <LinhasTabelaCategoriaAtividade {...categoriaAtividade} />
                            </React.Fragment> 
                            
                        ))}
                    </tbody>
                    </table>
    )
}