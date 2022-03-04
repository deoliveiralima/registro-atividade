import { combineReducers } from "redux"
import { listaCategoriaAtividade, funcListarCategoria } from "./categoriaAtividadeReducer"
import { alert } from "./alertReducer"
import { listaAtividades, funcListarAtividades, ordemLista } from "./atividadeReducer"



const appReducer = combineReducers({listaCategoriaAtividade, alert, listaAtividades, funcListarAtividades, ordemLista, funcListarCategoria})

export default appReducer