
export function alert(state = {classe :"", texto: ""}, action){
    switch(action.type){
        case "DEFINIR_ALERT":
            return {... action.alert}
        default:
            return state
    }

}