import { Link } from "react-router-dom";


export default function CardAtividade({atividade}){
    return(
        <div className="card mb-2"> 
            <h5 className="card-header">{atividade.descricao}</h5>
            <div className="card-body">
                <p>Motivo: {atividade.motivo} </p>
                <p>Data: {atividade.data} </p>
                
            </div>
        </div>
                )
}