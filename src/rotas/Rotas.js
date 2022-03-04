import { Route, Routes } from "react-router-dom";

import PaginaAtividade from "../paginas/atividade/PaginaAtividade";


import PaginaSalvaAtividade from "../paginas/atividade/PaginaSalva";
import PaginaEditaAtividade from "../paginas/atividade/PaginEdita";
import PaginaSalvaCategoriaAtividade from "../paginas/categoria-atividade/PaginaCadastro";
import PaginaCategoriaAtividade from "../paginas/categoria-atividade/PaginaCategoriaAtividade";
import PaginaEditaCategoriaAtividade from "../paginas/categoria-atividade/PaginaEdita";
import PaginaListaCategoriaAtividade from "../paginas/categoria-atividade/PaginaLista";
import PaginaObtemCategoriaAtividade from "../paginas/categoria-atividade/PaginaObtemCategoriaAtividade";
import Inicio from "../paginas/Inicio";
import LoginPage from '../paginas/login/pagina';
import RotasPrivadas from "./RotasPrivadas";


const Rotas = ({token})=>{

    return(
        <Routes>
          <Route element={<RotasPrivadas token = {token} />}>
            
            <Route path="/" element={<Inicio/>}/>
            <Route path="categoria-atividade" element={<PaginaCategoriaAtividade />}>
              <Route path="salva" element={<PaginaSalvaCategoriaAtividade/>}/>
              <Route path="lista" element={<PaginaListaCategoriaAtividade/>}/>
              <Route path="editar/:id" element={<PaginaEditaCategoriaAtividade />}/>
              <Route path=":id" element={<PaginaObtemCategoriaAtividade />}/>
            </Route>
            <Route path="atividade" element={<PaginaAtividade />}>
              <Route path="salva" element={<PaginaSalvaAtividade/>}/>
              <Route path="editar/:id" element={<PaginaEditaAtividade />}/>
              

            </Route>
            
          </Route>
          <Route  path='/login' element={<LoginPage />}/>
        </Routes>

    )
}

export default Rotas;