import React,{ useState } from "react";
import axios from "axios";

const token = sessionStorage.getItem('token')

const headers = {

        "Authorization" : `Bearer ${token}`
    
}

export default function useCategoriaAtividadeApi(){
    const [error, setError] = useState({})

    const [response, setResponse] = useState({})

    const salvar = (data) => {
        axios({
            method: 'POST',
            url: '/categoria-atividade',
            data: data,
            
            })
            .then(function (response) {
                setResponse(response)
                console.log(response)
            }).catch(function (error){
                setError(error)
                
            })
    }

    const listar = () => {
        axios({
            method: 'GET',
            url: '/categoria-atividade',
            headers: headers
        
            })
            .then(function (response) {
                setResponse(response)
                
            })
            .catch(function (error){
                setError(error)
            })
    }

    const atualizar = (data, id) => {
        axios({
            method: 'PUT',
            url: `/categoria-atividade/${id}`,
            data: data,
            
            })
            .then(function (response) {
                setResponse(response)
                console.log(response)
            }).catch(function (error){
                setError(error)
                
            })
    }

    const obter = (id) => {
        axios({
            method: 'GET',
            url: `/categoria-atividade/${id}`,
            headers: headers
        
            })
            .then(function (response) {
                setResponse(response)
                
            })
            .catch(function (error){
                setError(error)
            })
    }
    const excluir = (id) => {
        axios({
            method: 'DELETE',
            url: `/categoria-atividade/${id}`,
            headers: headers
        
            })
            .then(function (response) {
                setResponse(response)
                
            })
            .catch(function (error){
                setError(error)
            })
    }


    
    return{
        listar,
        salvar,
        atualizar,
        excluir,
        obter,

        error,  
        response
    }
}