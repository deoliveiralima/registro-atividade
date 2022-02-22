import { combineReducers } from "redux"
import { listaCategoriaAtividade } from "./categoriaAtividadeReducer"
import { alert } from "./alertReducer"



const appReducer = combineReducers({listaCategoriaAtividade, alert})

export default appReducer