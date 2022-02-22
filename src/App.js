import { useEffect, useState } from 'react';
import { useLogin } from './componentes/api/loginApi';

import './App.css';


import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import LoginPage from './paginas/login/pagina';
import 'bootstrap/dist/css/bootstrap.css';
import Inicio from './paginas/inicio';
import RotasPrivadas from './componentes/RotasPrivadas';
import PaginaSalvaCategoriaAtividade from './paginas/categoria-atividade/PaginaCadastro';
import PaginaCategoriaAtividade from './paginas/categoria-atividade/PaginaCategoriaAtividade';
import PaginaListaCategoriaAtividade from './paginas/categoria-atividade/PaginaLista';
import PaginaObtemCategoriaAtividade from './paginas/categoria-atividade/PaginaObtemCategoriaAtividade';

function App() {
  const token = sessionStorage.getItem('token')
  const [logado, setLoagado] = useState()
  

  console.log(token)


  return (
    <div className="App">
      <BrowserRouter>
 
        <Routes>
          <Route element={<RotasPrivadas token = {token} />}>
            <Route path="/" element={<Inicio/>}/>
            <Route path="categoria-atividade" element={<PaginaCategoriaAtividade />}>
              <Route path="salva" element={<PaginaSalvaCategoriaAtividade/>}/>
              <Route path="lista" element={<PaginaListaCategoriaAtividade/>}/>
              <Route path=":categoriaAtividadeId" element={<PaginaObtemCategoriaAtividade/>}/>
            </Route>
            
          </Route>
          <Route  path='/login' element={<LoginPage />}/>
          
          
 
        </Routes>

      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
