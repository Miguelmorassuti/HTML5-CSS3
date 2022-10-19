import HelloWorld from './components/HelloWorld'; //Importando componente
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const craque = 'Pelé'

  return (
    
    //CLASSE NO JSX É CLASSNAME
    <div className="App"> 
      <frase />
      <HelloWorld/>  
      <SayMyName name= "Clebão da 011"/>
      <SayMyName name= "Luqueta"/>
      <SayMyName name= {craque}/>
      <Pessoa 
      Nome="Miguel"
      Idade="19"
      Profissão="Estudante"
      Foto="https://via.placeholder.com/150"
    />
    </div>
  );
}

export default App;
