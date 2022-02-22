import CardAtividade from "./CardAtividades";


export default function ObtemCategoriaAtividade({categoriaAtividade}){
    return(
        <>
        <div className="row">
            { categoriaAtividade.atividades && categoriaAtividade.atividades.map( (atividade ,i) => (
                    
                    <div className="col" key={i}> 
                         <CardAtividade atividade ={atividade} />
                    </div>     
                            
            ))}
        </div>
         

        </>
    )
}