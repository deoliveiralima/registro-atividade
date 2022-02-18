import React, { useState } from "react";

export default function LoginForm(){

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handdleUsername(e){
        setUsername(e.target.value)
    }

    function loginSubmit(e){
        e.preventDefault();
        
    }
    console.log(username)
    console.log('aas')



    return(
        <>
            <form onSubmit={loginSubmit}>
                <div class="mb-3">
                <label htmlFor="username" class="form-label">Usuário</label>
                    <input type="text" name="username" id="username" class="form-control" onChange={(e) => { handdleUsername}} />
                </div>
                <br/>
                <br/>

                <div class="mb-3">
                <label htmlFor="senha" class="form-label">Senha</label>
                    <input type="text" name="username" id="username" class="form-control" onChange={(e) => { setUsername(e.target.value )}} />
                </div>
                <div className="button-form">
                    <button type="submit" class="btn btn-primary">Acessar</button>
                </div>

            </form>
           
        </>
    )
}