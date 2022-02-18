import { useEffect, useState } from 'react';
import { useLogin } from './api/componentes/api/loginApi';
import './App.css';

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [{data, loading, error}, execute] = useLogin()

  function logar(e){
    e.preventDefault();
    const usuario = {
      username, password
    }

    execute({data: usuario })

  }
  useEffect( () => {
    console.log(data)
  },[data]) 


  return (
    <div className="App">
      <form onSubmit={logar}>
        username: <input type="text" id="username" name='username' onChange={(e) => { setUsername(e.target.value) }} />
        <br/>
        <br/>
       password:  < input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
        <br/>
        <input type='submit' value="ok"/>

      </form>
     
    </div>
  );
}

export default App;
