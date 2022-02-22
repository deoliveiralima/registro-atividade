
export const Alert = ({alert}) =>{
    

    return(
        <div className={alert.classe} role="alert">
           {alert.texto}
        </div>
    )

} 

export default Alert