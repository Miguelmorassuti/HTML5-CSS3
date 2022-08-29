import './styles/App.css';
import Feed from './components/feed.js'; //Import da função feed do arq feed.js
import { useState } from 'react'; //Função que vai ajudar na hora de recarregar
//a pagina quando o usuario fizer novos posts

import PostForm from './components/postForm';

export default function App() { //Export default = para poder importar no index
    const [posts, setPosts] = useState([])


        function handleSubmit(history, userName){        
          
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
            <PostForm onSubmit={handleSubmit}/> 
            {/*Enviando função para o postForm.js (callback, crio uma function no arq pai, porem os dados necessarios para ela estao no filho, entao mando a funcao para la ser executada e retornada)*/}
            
            <main>
                <Feed posts={posts} />{/*Feed é um component filho do App.js */}
            </main>
        </div>
    );
}

// No React posso declarar estilos inline (style={{}}) como se fosse um object
// Ex: <h1 style={{color: '#00008b', fontSize: '2.2em'}}> Hello Word </h1>


//Também posso importar o estilo de um arquivo css com o mesmo nome da função
//Ex: Olhe para a primeira linha