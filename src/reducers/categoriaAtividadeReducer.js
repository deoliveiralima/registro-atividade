

export function listaCategoriaAtividade(state = [], action){
    switch(action.type){
        case 'LISTA_CATEGORIA_ATIVIDADE':
            return [action.listagemCategoriaAtividade]

        case 'EXCLUI_ITEM_LISTA_ATIVIDADE':
            console.log(action.atividades)
                    const newList = action.atividades.filter(item=> item.id !== action.id)
                console.log(newList)
            return newList;

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


export function funcListarCategoria(state = () =>{} , action){
    switch(action.type){
        case 'FUNC_LISTAR_CATEGORIA':
            return action.funcListarCategoria
        default:
            return state;
    }
}


