function Pessoa({Nome, Idade, Profissão, Foto}){ //Utilizando Struct
    return (
        <div>
            <img src={Foto} alt={Nome} />
            <h2>Nome: {Nome}</h2>
            <p>Idade: {Idade}</p>
            <p>Profissão: {Profissão}</p>
        </div>
    )
}

export default Pessoa