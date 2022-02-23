
import Axios  from "axios";
import useAxios, { configure } from "axios-hooks";
import React from "react";

const token = sessionStorage.getItem('token')

export function useSalvaCategoriaAtividade(data){

    return useAxios(
        {
            url: "/categoria-atividade",
            data : data,
            method: 'POST',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useObtemCategoriaAtividade(id){

    return useAxios(
        {
            url: `/categoria-atividade/${id}`,

            method: 'GET',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useAtualizaCategoriaAtividade(id, data){
    

    return useAxios(
        
        {
            url: `/categoria-atividade/${id}`,
            data : data,
            method: 'PUT',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useExcluiCategoriaAtividade(id){

    return useAxios(
        {
            url: `/categoria-atividade/${id}`,
            method: 'DELETE',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useListaCategoriaAtividade(id){

    return useAxios(
        {
            url:"/categoria-atividade",
            method: 'GET',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}