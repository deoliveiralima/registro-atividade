import CardAtividade from "./CardAtividades"



export default function ObtemCategoriaAtividade({categoriaAtividade}){
    console.log("pagina obtem categoria atividade")
    return(
        <>
        <div className="row">
            { categoriaAtividade.atividades && categoriaAtividade.atividades.map( (atividade ,i) => (
                    
                    <div className="col-4" key={i}> 
                         <CardAtividade atividade ={atividade} />
                    </div>     
                            
            ))}
        </div>
         

        </>
    )
}