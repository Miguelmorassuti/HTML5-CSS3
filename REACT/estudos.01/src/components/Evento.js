import Button from "./eventos/Button"

function Evento(){

    function ativado(){
        console.log("ativado com sucesso");
    }

    function ativado2(){
        console.log("ativado com sucesso a versão 2")
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={ativado} text="Primeiro Evento" /> 
            <Button event={ativado2} text="Segundo Evento" /> 
            <button onClick={ativado}>Ativar!</button>
        </div>
    )
}

export default Evento