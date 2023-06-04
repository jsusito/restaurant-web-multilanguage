import { Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/fragments/Footer';
import Nav from './components/fragments/Nav';
import { UserContext } from './components/index/authentication/UserSesion';
import { NewReceta } from './components/index/formularios/NewReceta';
import { CookieMap } from './components/index/request/CookieMap';
import { CargarRecetas } from './web/CargarRecetas';
import Carta from './web/Carta';
import { Cookies } from './web/Cookies';
import { Especialidades } from './web/Especialidades';
import { Grupo } from './web/Grupo';
import PagRestaurante from './web/PagRestaurante';
import Reserva from './web/Reserva';
import { Reservations } from './components/index/Reservations';
import { FormNewUser } from './components/index/formularios/FormNewUser';
import { Constants } from './utils/Constants';
import { useTranslation } from 'react-i18next';


function App() {
    
const timeSecureExit = new Constants().TIME_SECURE_EXIT * 60 * 1000;

const [token, setToken] = useState();
const [authenticate,setAuthenticate] = useState();
const [nameSesion, setNameSesion] = useState("");
const [showCountDown, setShowCountDown] = useState("");
const userAuthorities = useRef([]);
const [translationRecetas] = useTranslation('recetas');

//variables de contexto
const userData = {
  token: token,
  setToken: setToken,
  
  authenticate: authenticate,
  setAuthenticate: setAuthenticate,

  nameSesion: nameSesion,
  setNameSesion: setNameSesion,

  authorities: userAuthorities,

  timeSecurityExit: showCountDown,

  translationRecetas: translationRecetas
    
}


//Cierra sesion cuando el usuario no hace nada durante un tiempo determinado.
  document.addEventListener('click', () => {
      setShowCountDown(false);
    }
  )

  useEffect(() => {
    if(!showCountDown){
      setTimeout(() => {
        console.log("Cerrando sesion por inactividad");
        setShowCountDown(true);
      }, timeSecureExit);
      
    }
  }
  ,[showCountDown])


  //Verifica si hay guardado algún token valido en el registro de las cookies.
  useEffect(()=>{
    if(document.cookie.includes("token") && document.cookie.includes("user")){
      
      let cookie = new CookieMap(document.cookie);
      let cookieMap = cookie.getObjectCookie()
      
      setToken(cookieMap.token);
      setNameSesion(cookieMap.user);
      setAuthenticate(true);
      userAuthorities.current = cookieMap.authorities;
      
    }
  },[token])
  
  return (
      
  <HashRouter>
    <UserContext.Provider value = {userData}>
      <Suspense fallback={<div>Loading...</div>}>      
        <Nav></Nav>
          <Routes>
            <Route path="/" element = {<PagRestaurante></PagRestaurante>}> </Route>
            
            
            <Route path="reserva" element={<Reserva></Reserva>}> </Route>
            <Route path="carta" element={<Carta></Carta>}> </Route>
            <Route path="especialidades" element={<Especialidades></Especialidades>}></Route>
            <Route path="grupo" element={<Grupo></Grupo>}></Route>
            
            { authenticate && <Route path="cargarRecetas" element={<CargarRecetas/>}></Route> }
            { authenticate && <Route path="reservas" element={<Reservations/>}></Route> }
            { authenticate && <Route path="new-user" element={<FormNewUser/>}></Route> }
            
            <Route path="new-receta" element={<NewReceta/>}></Route>
          </Routes>
        <Footer></Footer>
        <Cookies ></Cookies>
      </Suspense>
     </UserContext.Provider>
  </HashRouter>
     
  );
}

export default App;