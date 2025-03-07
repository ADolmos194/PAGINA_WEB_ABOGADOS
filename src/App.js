import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Inicio} from './pages/inicio/inicio';
import {Servicio} from './pages/servicio/servicio';
import {Estudio} from './pages/estudio/estudio';
import {Abogados} from './pages/abogados/abogados';
import {Fundador1} from './pages/abogados/perfilabogado/fundadores/fundador1/fundador1';
import {Fundador2} from './pages/abogados/perfilabogado/fundadores/fundador2/fundador2';
import {Fundador3} from './pages/abogados/perfilabogado/fundadores/fundador3/fundador3';
import './App.css';
import { Socio1 } from './pages/abogados/perfilabogado/socios/socio1/socio1';
import { Socio2 } from './pages/abogados/perfilabogado/socios/socio2/socio2';
import { Socio3 } from './pages/abogados/perfilabogado/socios/socio3/socio3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Inicio></Inicio>
          </>
        } />
        <Route path="/estudio" element={
          <>
            <Estudio></Estudio>
          </>
        } />
        <Route path="/abogados" element={
          <>
            <Abogados></Abogados>
          </>
        } />
        <Route path="/abogados/perfilabogado/fundadores/fundador1" element={
          <>
            <Fundador1></Fundador1>
          </>
        } />
        <Route path="/abogados/perfilabogado/fundadores/fundador2" element={
          <>
            <Fundador2></Fundador2>
          </>
        } />
        <Route path="/abogados/perfilabogado/fundadores/fundador3" element={
          <>
            <Fundador3></Fundador3>
          </>
        } />
        <Route path="/abogados/perfilabogado/socios/socio1" element={
          <>
            <Socio1></Socio1>
          </>
        } />
        <Route path="/abogados/perfilabogado/socios/socio2" element={
          <>
            <Socio2></Socio2>
          </>
        } />
        <Route path="/abogados/perfilabogado/socios/socio3" element={
          <>
            <Socio3></Socio3>
          </>
        } />
        
        <Route path="/servicio" element={
          <>
            <Servicio></Servicio>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
