
import { useSelector } from "react-redux";
import { FormCategoriaAtividade } from "../../componentes/CategoriaAtividade";
import { Alert, Card } from "../../componentes/compartilhado";


export default function PaginaSalvaCategoriaAtividade(){
    const alert = useSelector(state => state.alert)

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card titulo={"Adicionar Atividade"} component = {<FormCategoriaAtividade />} />
                    <Alert alert={alert} />
                </div>
            </div>
        </div>
    )
}