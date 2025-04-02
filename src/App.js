import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Inicio} from './pages/inicio/inicio';
import {Servicio} from './pages/servicio/servicio';
import {Estudio} from './pages/estudio/estudio';
import {Abogados} from './pages/abogados/abogados';
import {JoseCarlosGodoyLacoste} from './pages/abogados/perfilabogado/fundadores/JoseCarlosGodoyLacoste/JoseCarlosGodoyLacoste';
import {FelipeBertoriniGuibert} from './pages/abogados/perfilabogado/fundadores/FelipeBertoriniGuibert/FelipeBertoriniGuibert';
import {FernandoFortMarie} from './pages/abogados/perfilabogado/fundadores/FernandoFortMarie/FernandoFortMarie';
import './App.css';
import { AlvaroVillalobosDiaz } from './pages/abogados/perfilabogado/socios/AlvaroVillalobosDiaz/AlvaroVillalobosDiaz';
import { RenzoIngaMiranda } from './pages/abogados/perfilabogado/socios/RenzoIngaMiranda/RenzoIngaMiranda';
import { Blog } from './pages/blog/blog';
import { Noticia1 } from './pages/blog/noticias/noticia1/noticia1';
import { Contacto } from './pages/contacto/contacto';

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
        <Route path="/abogados/perfilabogado/fundadores/JoseCarlosGodoyLacoste" element={
          <>
            <JoseCarlosGodoyLacoste></JoseCarlosGodoyLacoste>
          </>
        } />
        <Route path="/abogados/perfilabogado/fundadores/FelipeBertoriniGuibert" element={
          <>
            <FelipeBertoriniGuibert></FelipeBertoriniGuibert>
          </>
        } />
        <Route path="/abogados/perfilabogado/fundadores/FernandoFortMarie" element={
          <>
            <FernandoFortMarie></FernandoFortMarie>
          </>
        } />
        <Route path="/abogados/perfilabogado/socios/AlvaroVillalobosDiaz" element={
          <>
            <AlvaroVillalobosDiaz></AlvaroVillalobosDiaz>
          </>
        } />
        <Route path="/abogados/perfilabogado/socios/RenzoIngaMiranda" element={
          <>
            <RenzoIngaMiranda></RenzoIngaMiranda>
          </>
        } />
        <Route path="/servicio" element={
          <>
            <Servicio></Servicio>
          </>
        } />
        <Route path="/blog" element={
          <>
            <Blog></Blog>
          </>
        } />
        <Route path="/blog/noticias/noticia1/" element={
          <>
            <Noticia1></Noticia1>
          </>
        } />
        <Route path="/contacto" element={
          <>
            <Contacto></Contacto>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
