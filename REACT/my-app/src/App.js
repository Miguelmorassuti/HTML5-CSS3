import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import AppRoutes from './Routes'

export default function App() { //Export default = para poder importar no index


    return (
        <div className="wrapper">
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}

// No React posso declarar estilos inline (style={{}}) como se fosse um object
// Ex: <h1 style={{color: '#00008b', fontSize: '2.2em'}}> Hello Word </h1>


//Também posso importar o estilo de um arquivo css com o mesmo nome da função
//Ex: Olhe para a primeira linha