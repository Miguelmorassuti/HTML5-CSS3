import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/Navbar'

import Condicional from './components/Condicional';
import Eventos from './components/Evento'
import Form from './components/Form'
import List2 from './components/List2';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    
    //CLASSE NO JSX É CLASSNAME
    <div className="App">

      {/* CRIANDO AS PÁGINAS PELO ROUTER */}
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path="/empresa" element={<Empresa/>}></Route>
        </Routes>
        <Routes>
          <Route path="/contato" element={<Contato/>}></Route>
        </Routes>


      <h1>Testando Eventos</h1>
      <Eventos />
      <Form/>

      <h1>Renderização Condicional</h1>
      <Condicional />

      <h1>Renderização de Listas</h1>
      <List2 itens={meusItens} />

      </Router>
    </div>
  );
}

export default App;
