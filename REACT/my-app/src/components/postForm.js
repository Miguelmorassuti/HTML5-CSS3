import { useState } from 'react';

import '../styles/PostForm.css';
import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg';

export default function PostForm(props) {
    const [history, setHistory] = useState('');
    const [userName, setUsername] = useState('');

    function handleSubmit(event){
        event.preventDefault() //Para evitar o recarregamento autom. da pag.

        props.onSubmit(history, userName)

        //Para apagar os dados dos inputs apos os dados serem lidos e salvos
        setHistory("");
        setUsername("")
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <input value={history} //Para apagar sempre apos inserção
                placeholder="Escreva uma nova história..."
                onChange={(event) => setHistory(event.target.value)} />
            {/*Evento responsável por pegar a entrada de caracteres*/}

            <div>
                <img src={userIcon} alt='User' />

                <input value={userName} //Para apagar sempre apos inserção
                    type='text' placeholder="Digite seu nome"
                    onChange={(event) => setUsername(event.target.value)} />
                {/*Evento responsável por pegar a entrada de caracteres*/}


                <button type="submit">
                    <img src={paperPlaneIcon} alt='Paper plane' />
                    Publicar
                </button>

            </div>
        </form>
    )
}