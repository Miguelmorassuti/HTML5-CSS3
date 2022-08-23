import './styles/App.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg';
import EmptyFolder from './images/empty-folder.svg';
import './styles/PostForm.css';
import './styles/Feed.css';


export default function App() { //Export default = para poder importar no index
   
/*   const posts = [

        {
            id: Math.random(),             
            content: 'Conteudo do post',
            userName: 'Miguel',
            publishedAt: new Date(),
        }
       ] */
    const posts = []

    return
    (
        <div className="wrapper">
            {/* JSX nao consegue ler array de objetos, devo passar um array de strings entao! */}

            <form className="post-form" onSubmit={() => alert("Formulario Submetido")}>
                <input type='text' placeholder="Escreva uma nova história..." />
                <div>
                    <img src={userIcon} alt='User' />

                    <input type='text' placeholder="Digite seu nome" />

                    <button type="submit">
                        <img src={paperPlaneIcon} alt='Paper plane' />

                        Publicar
                    </button>
                </div>
            </form>
            
    )

        <main>

{/*Criando condição para aparecer caso o feed esteja sem conteudo utilizando shorthand (podia fazer tmb com operação ternária)*/}
      
                {posts.length<=0 && (        
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

                    /*Estou convertendo um array de obj em um novo array para ser lido pelo JSX*/
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
                    ) : null}
                    
            </main>

        </div>
    );
}



// No React posso declarar estilos inline (style={{}}) como se fosse um object
// Ex: <h1 style={{color: '#00008b', fontSize: '2.2em'}}> Hello Word </h1>


//Também posso importar o estilo de um arquivo css com o mesmo nome da função
//Ex: Olhe para a primeira linha