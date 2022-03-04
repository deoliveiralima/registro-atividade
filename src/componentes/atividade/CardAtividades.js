import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { excluiItemLista, listaAtividades } from "../../actions/actions";
import useAtividadeApi from "../api/useAtividadeApi";


export default function CardAtividade({atividade}){
    const {excluir, response, error} = useAtividadeApi()
    const dispatch = useDispatch()
    const atividades = useSelector(state => state.listaAtividades)
    const listar = useSelector(state => state.funcListarAtividades)
    const ordem = useSelector(state => state.ordemLista)

    function excluiAtividade(id){
        excluir(id)

    }
    // const data = moment(atividade.data).format('DD-MM-YYYY ');
    // console.log(data)
   

    useEffect(()=>{
        if(response.data){
            console.log(response.data)
            listar(ordem)
        }
            
    },[response])

    
    return(
        <div className="card mb-2"> 
            <div className="card-header">
                
                <div className="d-flex justify-content-between">
                    <div>
                        {atividade.descricao}
                    </div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">

                    
                    <Link className="button btn btn-default" to={"/atividade/editar/"+atividade.id}  > Editar </Link>
                    <button className="button" className="btn btn-danger" onClick={(e)=> excluiAtividade(atividade.id)}>Excluir</button>
                </div>
                </div>

                
            </div>
            <div className="card-body">
                <p>Motivo: {atividade.motivo} </p>
                <p>Data: {moment(atividade.data).format('DD-MM-YYYY ')} </p>
                <p>Categoria: <Link to={"/categoria-atividade/"+atividade.categoriaAtividade.id}> {atividade.categoriaAtividade.nome}    </Link>  </p>
            </div>
        </div>
            )
}