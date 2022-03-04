import { useState } from "react"
import axios from "axios"

const token = sessionStorage.getItem('token')

const headers = {

        "Authorization" : `Bearer ${token}`
    
}

export default function useAtividadeApi(){

    const [error, setError] = useState({})

    const [response, setResponse] = useState({})

    const salvar = (data) => {
        axios({
            method: 'POST',
            url: '/atividade',
            data: data,
            headers: headers
            
            })
            .then(function (response) {
                setResponse(response)
                console.log(response)
            }).catch(function (error){
                setError(error)
                
            })
    }

    const listar = (direcao = 'ASC') => {
        axios({
            method: 'GET', 
            url: `/atividade/listar/${direcao}`,
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
            url: `/atividade/${id}`,
            data: data,
            headers: headers
            
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
            url: `/atividade/${id}`,
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
            url: `/atividade/${id}`,
            headers: headers
        
            })
            .then(function (response) {
                setResponse(response)
                
            })
            .catch(function (error){
                setError(error)
            })
    }

    const listarPorData = (data) => {
        console.log(data)
        axios({
            method: 'POST', 
            url: '/atividade/listar/data',
            headers: headers,
            data: {data}
        
            })
            .then(function (response) {
                setResponse(response)
                
            })
            .catch(function (error){
                setError(error)
            })
    }

    const editar = (id) => {

        axios({
            method: 'GET',
            url: `/atividade/editar/${id}`,
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
        listarPorData,
        editar,

        error,  
        response
    }


} 