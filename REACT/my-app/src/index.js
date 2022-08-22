import  ReactDOM  from 'react-dom';
import App from './App.js'  //Importando Função

ReactDOM.render( //RENDER é o processo d converter o código em algo na interface
    <App/>,       // 1º PARAMETRO - o que sera inserido (Nesse caso uma função)
    document.getElementById('entrada'),// 2° PARAMETRO-o local onde sera alocado
)