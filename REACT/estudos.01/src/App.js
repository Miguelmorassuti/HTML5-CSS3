import HelloWorld from './components/HelloWorld'; //Importando componente
import './App.css';

function App() {
  const name = 'Miguel'
  const idade = 19
  const url='https://via.placeholder.com/150'

  const sum = (x, y)=>{ //É possivel invocar funções no HTML
    return (x+y)
  }

  return (
    
    //CLASSE NO JSX É CLASSNAME
    <div className="App"> 
      <h1>Alterando o JSX</h1>
       <p>Olá {name}</p>
      <p>Idade: {idade} anos</p>
      <p>Soma: {sum(10,17)}</p> 
      <img src={url} alt= "Minha Imagem"/>  
      <HelloWorld/>  
    </div>
  );
}

export default App;
