import { useState } from "react";
import axios from 'axios'

export function useLogin(){
    const [response, setResponse] = useState({})

    const  login = (data) => {
    
    axios({
            method: 'POST',
            url: '/auth',
            data: data
        
            })
            .then(function (response) {
                setResponse(response)
               
            }).catch(function (error){
                
            })}
        
   return {login, response}
}

        
