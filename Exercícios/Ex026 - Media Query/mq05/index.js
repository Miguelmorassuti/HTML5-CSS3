function menu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none';
    } else{
        itens.style.display = 'block';
    }
}

// Função para controlar o tamanho da pag e forçar o menu a aparecer
function mudouTamanho(){
    if (window.innerWidth >= 768){
        itens.style.display = 'block';
    } else{
        itens.style.display = 'none';
    }
}