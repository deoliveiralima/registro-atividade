import { LISTA_CATEGORIA_ATIVIDADE, DEFINIR_ALERT, OBTEM_CATEGORIA_ATIVIDADE } from "./ActionsTypes";

export function definirAlert(alert){
    
    return { type: DEFINIR_ALERT, alert }

}