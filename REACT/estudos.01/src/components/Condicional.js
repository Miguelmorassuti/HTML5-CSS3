import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function EnviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function LimpaEmail(e){
        setUserEmail("")
    }

    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                 />
                <button 
                type="submit" onClick={EnviarEmail}>Enviar Email
                </button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario é {userEmail}</p>
                    </div>
                )}
                <button 
                type="reset" onClick={LimpaEmail}>Limpar Email
                </button>

            </form>
        </div>
    )
}

export default Condicional