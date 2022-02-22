import React from "react";
import useAxios,{configure} from "axios-hooks";
import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:8080/'
})
configure({axios})
export function useLogin(data){
    return useAxios(
        {
            url: "/auth",
            data : data,
            method: 'POST'
        }, {manual: true}
    )
}