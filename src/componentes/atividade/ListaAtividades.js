import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardAtividade from "./CardAtividades";


export default function ListaAtividades({}){
    const atividades = useSelector(state => state.listaAtividades)
    
    const [listaAtividades, setListaAtividades] = useState()


    useEffect(()=>{
        if(atividades){
          
            setListaAtividades(atividades)
        }
            
    }, [atividades])



    return( 
        <div className=""  >
        
            { atividades && atividades.map( (atividade ,i) => (
                
                    <CardAtividade atividade ={atividade} key={i} />
                  
                            
            ))}

            {!atividades.length>0 && <>
                <p className="h2">  Não há atividades para esta data </p>
            </>}
        

        </div>
    )
}