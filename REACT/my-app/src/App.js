import './styles/App.css';
import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg';
import EmptyFolder from './images/empty-folder.svg';
import './styles/PostForm.css';
import './styles/Feed.css';
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

            {/*Criando condição para aparecer caso o feed esteja sem conteudo utilizando short circuit evaluation (podia fazer tmb com operação ternária)*/}
      
                {posts.length===0 && (        
                <div className="feed-status">
                    <img src={EmptyFolder} alt='Empty Folder'/>
                    <h1>Não encontramos nada</h1>
                    <h2>Parece que você e seus amigos não postaram nada. Comece a   escrever uma nova história!</h2>
                </div>
                )}
                       

            {/*Criando condição para aparecer caso o feed esteja com conteudo utilizando operação ternária */}

                {posts.length> 0? (
                <>  {/*possibilita colocar 2 elementos irmãos sem pai */} 
                    <header>
                        <h1>Seu Feed</h1>
                        <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
                    </header>

                    {/*Estou convertendo um array de obj em um novo array para ser lido pelo JSX*/}
                    <section className="feed">
                        {posts.map((post) =>(  
                            
                            <article key={post.id}>          
                            <p>{post.content}</p>
                            <footer>
                                <div className="user-details">
                                    <img src={userIcon} alt="User" />
                                    <strong>{post.userName}</strong>
                                </div>
                                <div className="time">
                                    <img src={clockIcon} alt="time" />
                                    <span>Publicado em {post.publishedAt.toLocaleDateString("pt-br")}</span>
                                </div>
                            </footer>
                        </article>
                        ))}
                        
                    </section>
                    </> 
                    ) : null}
                    
            </main>
        </div>
    );
}



// No React posso declarar estilos inline (style={{}}) como se fosse um object
// Ex: <h1 style={{color: '#00008b', fontSize: '2.2em'}}> Hello Word </h1>


//Também posso importar o estilo de um arquivo css com o mesmo nome da função
//Ex: Olhe para a primeira linha