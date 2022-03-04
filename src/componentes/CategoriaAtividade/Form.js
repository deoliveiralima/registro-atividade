import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { definirAlert } from "../../actions/actions"
import useCategoriaAtividadeApi from "../api/useCategoriaAtividadeApi"

export default function FormCategoriaAtividade({categoria}){
    console.log(categoria)
    const [alertClass, setAlertClass] = useState()
    const [alertTexto, setAlertTexto] = useState()

    const [nome, setNome] = useState(categoria ? categoria.nome: '')
    const [id, setId] = useState(categoria ? categoria.id : '')

    const {listar, atualizar, salvar, error, response } = useCategoriaAtividadeApi()

    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    useEffect(()=>{
        
    },[])



    useEffect(() => {
        
        if(response.data){
            dispatch(definirAlert({classe: "alert alert-success", texto: "Categoria de Atividade Salva"}))
            setNome('')

            setTimeout(() => {
                dispatch(definirAlert({classe: "", texto: ""}))
                if(id)
                    navigate('/categoria-atividade/lista')

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
        id? atualizar({nome:nome}, id): salvar({nome: nome})  
        
        
    }

    return (
        <form onSubmit={categoriaAtividadeSubmit}>

            <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" name="nome" value={nome} id="nome" className="form-control" onChange={(e) => { setNome(e.target.value)}} required />
            </div>
            <button type="submit" className="btn btn-primary button-form">Salvar</button>
        </form>
    )
}