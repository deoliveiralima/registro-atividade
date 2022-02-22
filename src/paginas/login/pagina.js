import { Card } from "../../componentes/compartilhado";
import LoginForm from "../../componentes/login/Form";


export default function PaginaDeLogin(){

    return(
        <div className="pagina-login">

        

            <div className="d-flex justify-content-center">
                

                <div className="login-card mt-5">
                <Card titulo={"Login"} component = {<LoginForm/>} />
                </div>

            </div>
        </div>
    )
                   
          
}