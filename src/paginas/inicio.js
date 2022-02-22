import { Link } from "react-router-dom";


export default function Inicio(){

    return (
        <>
            <h1> Pagina Inicial</h1>
            <Link to="/categoria-atividade/salva">Adicionar Categoria </Link><br/>
            <Link to="/categoria-atividade/lista">Lista Categoria </Link>
            
 
        </>
    )
}