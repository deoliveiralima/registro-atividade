import { LISTA_CATEGORIA_ATIVIDADE, DEFINIR_ALERT, OBTEM_CATEGORIA_ATIVIDADE,LISTA_ATIVIDADES, 
    EXCLUI_ITEM_LISTA_ATIVIDADE, FUNC_LISTAR_ATIVIDADES, ORDEM_LISTA, FUNC_LISTAR_CATEGORIA } from "./ActionsTypes";

export function definirAlert(alert){
    
    return { type: DEFINIR_ALERT, alert }

}

export function listaAtividades(atividades){

    return {type: LISTA_ATIVIDADES, atividades }
}

export function excluiItemLista(atividades, id){
    return {type: EXCLUI_ITEM_LISTA_ATIVIDADE, atividades, id}

}

export function funcListarAtividades (funcListarAtividades){
    
    return {type: FUNC_LISTAR_ATIVIDADES, funcListarAtividades}
}

export function ordemLista(ordemLista){

    return {type: ORDEM_LISTA, ordemLista}

}

export function funcListarCategoria (funcListarCategoria){
    return{type: FUNC_LISTAR_CATEGORIA, funcListarCategoria }
}
