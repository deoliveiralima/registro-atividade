
import { Axios } from "axios";
import useAxios from "axios-hooks";
import React from "react";

const axios = Axios.create({
    baseURL: 'http://localhost:8080/categoria-atividade'
})
configure({axios})

export function useSalvaCategoriaAtividade(data){

    return useAxios(
        {
            data : data,
            method: 'POST',
            headers: {"Authorization" : `Bearer ${token}`}
        }, {manual: true}
    )
}

export function useObtemCategoriaAtividade(id, data){

    return useAxios(
        {
            url: `/${id}`,
            data : data,
            method: 'PUT',
        }, {manual: true}
    )
}

export function useAtualizaCategoriaAtividade(id, data){
    

    return useAxios(
        {
            url: `/${id}`,
            data : data,
            method: 'PUT',
        }, {manual: true}
    )
}

export function useExcluiCategoriaAtividade(id){

    return useAxios(
        {
            url: `/${id}`,
            method: 'DELETE',
        }, {manual: true}
    )
}

export function useListCategoriaAtividade(id){

    return useAxios(
        {
            url: `/${id}`,
            method: 'DELETE',
        }, {manual: true}
    )
}