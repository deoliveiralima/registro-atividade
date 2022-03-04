import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { definirAlert } from "../../actions/actions"
import useAtividadeApi from "../api/useAtividadeApi"

import useCategoriaAtividadeApi from "../api/useCategoriaAtividadeApi"

export default function FormEditaAtividade({atividade}){
    const {listar:listarCategorias, response:responseCategorias, error:errorResponseCategorias} = useCategoriaAtividadeApi()
    const {salvar, atualizar, response, error} = useAtividadeApi()


    const [descricao, setDescricao] = useState('')
    const [motivo, setMotivo] = useState('')
    const [data, setData] = useState('')
    const [id, setId] = useState()

    const [categoriaAtividade, setCategoriaAtividade] = useState()
    const [categoriaAtividadeId, setCategoriaAtividadeId] = useState()
    

    console.log(atividade)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(atividade.id){
            setDescricao(atividade.descricao)
            setMotivo(atividade.motivo)
            const data = moment(atividade.data).format('DD/MM/YYYY ')
            setData(moment(atividade.data).format('DD/MM/YYYY '))
           console.log(data)
            setId(atividade.id) 

        }
        listarCategorias()

    },[])

    useEffect(()=>{
        
        if(responseCategorias.data)
            setCategoriaAtividade(responseCategorias.data)

    },[responseCategorias.data])

    useEffect(() => {
        
        if(response.data){
            dispatch(definirAlert({classe: "alert alert-success", texto: "Atividade Salva"}))
            setDescricao('')
            setMotivo('')
            setData('')
            setId()
            
            
            dispatch(definirAlert({classe: "alert alert-success", texto: "Categoria de Atividade Salva"}))

            setTimeout(() => 
                dispatch(definirAlert({classe: "", texto: ""}))

            ,1500);

        }
        
    }, [response.data])

    useEffect(() => {
        if(error.response){
            dispatch(definirAlert({classe: "alert alert-danger", texto: "Problema ao salvar o item"}))
           
        }
        
    }, [error])


    function categoriaAtividadeSubmit(e){
        e.preventDefault()
       let  dados = {
            descricao: descricao, motivo: motivo, data: data, categoriaAtividadeId
        }
        if(atividade.id)
            atualizar(dados, id)
        else
            salvar(dados, id)
        
    }

    return (
        <form onSubmit={categoriaAtividadeSubmit} className='form-cadastro' >
            <div className="row mb-3">
            <label htmlFor="categoriaAtividadeId" className="col-2 col-form-label">Descricao</label>
            <div className="col-10">
                <select id="categoriaAtividadeId" name="categoriaAtividadeId" defaultValue=""className="form-select" aria-label="Default select example" onChange={(e) => setCategoriaAtividadeId(e.target.value)} required>
                        <option value="" disabled> Selecione uma categoria </option>
                { categoriaAtividade && categoriaAtividade.map( (categoriaAtividade, i) => (
                        <option  key={categoriaAtividade.id} value={categoriaAtividade.id}>{categoriaAtividade.nome}</option>
                                
                ))}
                </select>

            </div>
            </div>
            

            <div className="row mb-3">
            
            <label htmlFor="descricao" className="col-2 col-form-label">Descricao</label>
            <div className="col-10">
                <input type="text" name="descricao" value={descricao} id="descricao" className="form-control" onChange={(e) => { setDescricao(e.target.value)}} required />
            </div>    
            </div>

            <div className="row mb-3">
                <label htmlFor="motivo" className="col-2 col-form-label">Motivo</label>
                <div className="col-10">
                    <input type="text" name="motivo" value={motivo} id="motivo" className="form-control" onChange={(e) => { setMotivo(e.target.value)}} required />
                </div>
            </div>

            <div className="row mb-3">
            <label htmlFor="data" className="col-2 col-form-label">Data</label>
            <div className="col-10">
                <input type="date" name="data" value={data} id="data" className="form-control" onChange={(e) => { setData(e.target.value)}} required />
            </div>
            </div>
            <button type="submit" className="btn btn-primary button-form">Salvar</button>
        </form>
    )
}