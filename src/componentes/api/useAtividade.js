import { Axios } from "axios";
import useAxios from "axios-hooks";
import React from "react";


const axios = Axios.create({
    baseURL: 'http://localhost:8080/atividade'
})
configure({axios})

export function useSalvaAtividade(data){
    return useAxios(
        {
            data : data,
            method: 'POST',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useObtemAtividade(id){
    return useAxios(
        {
            url: `/${id}`,
            data : data,
            method: 'GET',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useAtualizaAtividade(data, id){
    return useAxios(
        {
            url: `/${id}`,
            data : data,
            method: 'PUT',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useExcluiAtividade(id){
    return useAxios(
        {
            url: `/${id}`,
            data : data,
            method: 'DELETE',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useListaAtividade(){
    return useAxios(
        {
            data : data,
            method: 'GET',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}