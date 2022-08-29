import './styles/App.css';
import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import './styles/PostForm.css';
import './styles/Feed.css';
import Feed from './components/feed.js'; //Import da função feed do arq feed.js
import { useState } from 'react'; //Função que vai ajudar na hora de recarregar
                                  //a pagina quando o usuario fizer novos posts
                         

export default function App() { //Export default = para poder importar no index
    const [history, setHistory] = useState('');
    const [userName, setUsername] = useState('');
    const [posts, setPosts] = useState([]) 
 

       function handleSubmit(event) {
            event.preventDefault();//Para evitar o recarregamento autom. da pag.

           setPosts([  //criando novos posts
            ...posts, //Para renderizar os posts feitos no codigo  
            {
                id: Math.random(),      
                content: history,
                userName:  userName,
                publishedAt: new Date()
            }
           ])       

           //Para apagar os dados dos inputs apos os dados serem lidos e salvos
           setHistory("");
           setUsername("")
       }

    return(
        <div className="wrapper">
            {/* JSX nao consegue ler array de objetos, devo passar um array de strings entao! */}

            <form className="post-form" onSubmit={handleSubmit}>
                <input value={history} //Para apagar sempre apos inserção
                 placeholder="Escreva uma nova história..." 
                 onChange={(event) => setHistory(event.target.value)} /> 
                {/*Evento responsável por pegar a entrada de caracteres*/ }
                
                <div>
                    <img src={userIcon} alt='User' />

                    <input value={userName} //Para apagar sempre apos inserção
                     type='text' placeholder="Digite seu nome"
                     onChange={(event) => setUsername(event.target.value)}/>
                    {/*Evento responsável por pegar a entrada de caracteres*/ }


                    <button type="submit">
                        <img src={paperPlaneIcon} alt='Paper plane' />
                        Publicar
                    </button>

                </div>
            </form>
            

        <main> 
            <Feed posts={posts} />  {/*Feed é um componente filho do App.js */}
        </main>
        </div>
    );
}



// No React posso declarar estilos inline (style={{}}) como se fosse um object
// Ex: <h1 style={{color: '#00008b', fontSize: '2.2em'}}> Hello Word </h1>


//Também posso importar o estilo de um arquivo css com o mesmo nome da função
//Ex: Olhe para a primeira linha