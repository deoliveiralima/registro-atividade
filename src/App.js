import { useEffect, useState } from 'react';
import { useLogin } from './componentes/api/loginApi';

import './App.css';




import 'bootstrap/dist/css/bootstrap.css';

import Rotas from './rotas/Rotas';

function App() {
  const token = sessionStorage.getItem('token')
  const [logado, setLoagado] = useState()
  

  console.log(token)


  return (
    <div className="App">
     
 
       <Rotas token={token}/>

   
      
     
    </div>
  );
}

export default App;
