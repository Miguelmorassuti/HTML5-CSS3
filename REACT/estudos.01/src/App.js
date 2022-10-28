import HelloWorld from './components/HelloWorld'; //Importando componente
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const craque = 'Pelé'

  return (
    
    //CLASSE NO JSX É CLASSNAME
    <div className="App"> 
    
      <HelloWorld/>  
      <SayMyName name= "Luqueta"/>
      <SayMyName name= {craque}/>
      <Pessoa 
      Nome="Miguel"
      Idade="19"
      Profissão="Estudante"
      Foto="https://via.placeholder.com/150"
    />
    <List/>
    </div>
  );
}

export default App;
