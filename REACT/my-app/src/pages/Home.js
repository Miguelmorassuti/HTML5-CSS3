import { useState } from "react"; //Função que vai ajudar na hora de recarregar
//a pagina quando o usuario fizer novos posts

import PostForm from '../components/postForm';
import Feed from '../components/feed.js'; //Import da função feed do arq feed.js

export default function Home() {
    const [posts, setPosts] = useState([])

    function handleSubmit(history, userName) {

        setPosts([  //criando novos posts
            ...posts, //Para renderizar os posts feitos no codigo  
            {
                id: Math.random(),
                content: history,
                userName: userName,
                publishedAt: new Date()
            }
        ])
    }

    return(
        <> 
        <PostForm onSubmit={handleSubmit} /> 
        {/*Enviando função para o postForm.js (callback, crio uma function no arq pai, porem os dados necessarios para ela estao no filho, entao mando a funcao para la ser executada e retornada)*/ }

    <main>
        <Feed posts={posts} />{/*Feed é um component filho do App.js */}
    </main>
    </>
    )
}