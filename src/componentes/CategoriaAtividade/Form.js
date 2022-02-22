import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { definirAlert } from "../../actions/actions"
import { useSalvaCategoriaAtividade } from "../api"

export default function FormCategoriaAtividade(){

    const [alertClass, setAlertClass] = useState()
    const [alertTexto, setAlertTexto] = useState()

    const dispatch = useDispatch()

    const [nome, setNome] = useState('')

    const [ { data: data, loading: lading, error: error, response: response }, execute ] = useSalvaCategoriaAtividade()

    const navigate = useNavigate()

    useEffect(() => {
        if(data){
            dispatch(definirAlert({classe: "alert alert-success", texto: "Categoria de Atividade Salva"}))
            setNome('')

            setTimeout(() => 
                dispatch(definirAlert({classe: "", texto: ""}))

            ,1500);

        }
        
    }, [data])

    useEffect(() => {
        if(error){
            setAlertClass('alert alert-danger')
            setAlertTexto('Problema ao salvar o item')
        }
        
    }, [error])


    function categoriaAtividadeSubmit(e){
        e.preventDefault()

        execute({data: { nome } })
        
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