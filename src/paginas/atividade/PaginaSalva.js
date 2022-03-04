
import { useSelector } from "react-redux";
import FormAtividade from "../../componentes/atividade/Form";
import { Alert, Card } from "../../componentes/compartilhado";


export default function PaginaSalvaAtividade({}){

    const alert = useSelector(state => state.alert)

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card titulo={"Adicionar Atividade"} component = {<FormAtividade />} /> 
                    <Alert alert={alert} />
                </div>
            </div>
        </div>
 
    )
}