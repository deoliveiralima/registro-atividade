import React from "react";
import useAxios,{configure} from "axios-hooks";
import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:8080/auth'
})
configure({axios})
export function useLogin(data){
    return useAxios(
        {
            data : data,
            method: 'POST'
        }, {manual: true}
    )
}