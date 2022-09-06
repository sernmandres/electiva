import './App.css';

//Importar las paginas{componentes principales de la rutas}
import Home from './page/Home';
import NavBar from './component/NavBar';

//Manejo de URI
import {Routes , Route} from 'react-router-dom';

const App = () => {
  return(
    <>
    <NavBar />
    <Routes>
     <Route exact path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App;
