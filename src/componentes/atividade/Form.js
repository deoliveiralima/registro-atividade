import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { definirAlert } from "../../actions/actions"
import useAtividadeApi from "../api/useAtividadeApi"

import useCategoriaAtividadeApi from "../api/useCategoriaAtividadeApi"

export default function FormAtividade({atividade}){

    const {listar:listarCategorias, response:responseCategorias, error:errorResponseCategorias} = useCategoriaAtividadeApi()
    const {salvar, atualizar, response, error} = useAtividadeApi()
   

    const [descricao, setDescricao] = useState(atividade? atividade.descricao : '')
    const [motivo, setMotivo] = useState(atividade? atividade.motivo : '')
    const [data, setData] = useState(atividade? moment(atividade.data).format('YYYY-MM-DD') : '')
    const [id, setId] = useState(atividade? atividade.id : '')
    const [categoriaAtividadeId, setCategoriaAtividadeId] = useState(atividade? atividade.categoriaAtividadeId : '')

    const [categoriaAtividade, setCategoriaAtividade] = useState()
    
    

    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    console.log(atividade)

    useEffect(()=>{

     
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
            setId('')
            setCategoriaAtividadeId('')
            
            
            dispatch(definirAlert({classe: "alert alert-success", texto: "Categoria de Atividade Salva"}))

            setTimeout(() =>{
                dispatch(definirAlert({classe: "", texto: ""}))
                if(atividade)
                navigate('/')

            } 
                
               

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

        atividade ? atualizar(dados, id) : salvar(dados)
          
        
    } 

    return (
        <form onSubmit={categoriaAtividadeSubmit} className='form-cadastro' >
            <div className="row mb-3">
            <label htmlFor="categoriaAtividadeId" className="col-2 col-form-label">Descricao</label>
            <div className="col-10">
                
                <select id="categoriaAtividadeId" name="categoriaAtividadeId" defaultValue={categoriaAtividadeId} className="form-select" aria-label="Default select example" onChange={(e) => setCategoriaAtividadeId(e.target.value)} required>
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