import Frase from "./Frase" //É possivel importar de outros components

function HelloWorld() {

    return(
        <div>
            <Frase/>
            <h1>Meu Primeiro Componente</h1>
            <Frase/>
        </div>
    )
}

export default HelloWorld;