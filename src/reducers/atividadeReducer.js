

export function listaAtividades(state = [], action){
    switch(action.type){
        case 'LISTA_ATIVIDADES':
      
            return [...action.atividades]
        default:
            return state;
    }
}

export function obtemAtividade(state = {}, action){
    switch(action.type){
        case 'OBTEM_ATIVIDADE':
            return {...action.categoriaAtividade}
        default:
            return state;
    }
}

export function funcListarAtividades(state = ()=> {}, action){
    switch(action.type){
        case 'FUNC_LISTAR_ATIVIDADES':

            return action.funcListarAtividades
        default:
            return state;
    }
}
export function ordemLista(state = '', action){
    switch(action.type){
        case 'ORDEM':
            return action.ordemLista;
        default:
            return state;
    }
} 



