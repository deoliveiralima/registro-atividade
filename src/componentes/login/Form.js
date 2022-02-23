import React, { useEffect, useState } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { useLogin } from "../api/loginApi";

export default function LoginForm(){

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    //const [ { data: loginData, loading: lading, error: error }, execute ] = useLogin()
    const {login, response} = useLogin()
    const navigate = useNavigate()

    useEffect(() => {
        if(response.data){
            sessionStorage.setItem('token', response.data.token)
            console.log(response.data)
            navigate('/')
        }
         
            

    },[response])




    function loginSubmit(e){
        e.preventDefault();
        const data = {username: username, password: password}

        login(data)
        
       
       

        
    }
    


    return(
        <>
            <form onSubmit={loginSubmit}>
                <div className="mb-3">
                <label htmlFor="username" className="form-label">Usuário</label>
                    <input type="text" name="username" id="username" className="form-control" onChange={(e) => { setUsername(e.target.value)}} />
                </div>
                <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value )}} />
                </div>
                
                    <button type="submit" className="btn btn-primary button-form">Acessar</button>
                

            </form>
           
        </>
    )
}