
export function alert(state = {classe :"", texto: ""}, action){
    switch(action.type){
        case "DEFINIR_ALERT":
            console.log(action.alert)
            return {... action.alert}
        default:
            return state
    }

}