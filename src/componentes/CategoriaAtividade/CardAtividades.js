

export default function CardAtividade({atividade}){
    return(
        <div className="card">
            <h5 className="card-header">Atividade</h5>
            <div className="card-body">
                <p>Descrição: {atividade.descricao} </p>
                <p>Motivo: {atividade.motivo} </p>
                <p>Data: {atividade.data} </p>
            </div>
            </div>
                )
}