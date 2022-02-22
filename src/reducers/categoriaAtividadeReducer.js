

export function listaCategoriaAtividade(state = [], action){
    switch(action.type){
        case 'LISTA_CATEGORIA_ATIVIDADE':
            return [action.listagemCategoriaAtividade]
        default:
            return state;
    }
}

export function obtemCategoriaAtividade(state = {}, action){
    switch(action.type){
        case 'OBTEM_CATEGORIA_ATIVIDADE':
            return {...action.categoriaAtividade}
        default:
            return state;
    }
}

