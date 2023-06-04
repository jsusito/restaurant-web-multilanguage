import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "../index/CountDown";
import { UserContext } from "../index/authentication/UserSesion";
import { Token } from "../index/request/Token";
import { NavDropDown } from "../nav/NavDropDown";
import iconSpain from "../../images/icon-country/icon-espana.jpg"
import iconEnglish from "../../images/icon-country/icon-londres.png"
import iconFrench from "../../images/icon-country/icon-francia.png"
import { useTranslation } from "react-i18next";


const iconLanguage = <svg  aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-fa-i2svg=""><path fill="currentColor" d="M3.814 16.464a.501.501 0 00.65-.278L5.54 13.5h2.923l1.074 2.686a.5.5 0 00.928-.372l-3-7.5a.52.52 0 00-.928 0l-3 7.5a.5.5 0 00.278.65zM7 9.846L8.061 12.5H5.94zM6 7.5a.5.5 0 00.224-.053l2-1a.5.5 0 10-.448-.894l-2 1A.5.5 0 006 7.5zM11.75 14.25a2.025 2.025 0 001.75 2.25 2.584 2.584 0 001.482-.431c.039.088.07.152.075.162a.5.5 0 00.887-.461 4.654 4.654 0 01-.15-.368c.176-.168.359-.348.56-.548a11.374 11.374 0 001.92-2.652A1.55 1.55 0 0119 13.5a2.082 2.082 0 01-1.607 2.012.5.5 0 00.107.988.506.506 0 00.107-.012A3.055 3.055 0 0020 13.5a2.542 2.542 0 00-1.283-2.205c.16-.364.244-.6.255-.63a.5.5 0 10-.944-.33 7.97 7.97 0 01-.225.552 5.11 5.11 0 00-2.482-.21c.04-.428.091-.845.153-1.229 1.427-.123 3.04-.44 3.124-.458a.5.5 0 00-.196-.98c-.019.003-1.43.283-2.736.418.162-.761.31-1.273.313-1.284a.5.5 0 10-.958-.288c-.016.053-.206.695-.393 1.64-.041 0-.088.004-.128.004h-2a.5.5 0 000 1h1.955c-.072.476-.134.985-.17 1.517a4.001 4.001 0 00-2.535 3.233zm1.75 1.25c-.362 0-.75-.502-.75-1.25a2.82 2.82 0 011.506-2.094 11.674 11.674 0 00.384 2.927 1.684 1.684 0 01-1.14.417zm2.604-3.897a4.4 4.4 0 011.251.193 10.325 10.325 0 01-1.708 2.35l-.163.162A11.04 11.04 0 0115.25 12c0-.093.008-.185.01-.278a3.318 3.318 0 01.844-.12z M22.5 3h-21a.5.5 0 00-.5.5v16a.5.5 0 00.5.5H10v3.5a.5.5 0 00.854.354L14.707 20H22.5a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5zM22 19h-7.5a.5.5 0 00-.354.146L11 22.293V19.5a.5.5 0 00-.5-.5H2V4h20z"></path></svg>;



function Nav(){

  const [t, i18n] = useTranslation('navFragment');
  
  const linkNavRef = useRef();
  const [password, setPassword] = useState("");
  const [failRequestAuthenticate, setFailRequestAuthenticate] = useState(false);
  const [cursorState, setCursorState] = useState('auto'); //se encarga cambiar el cursor a espera en login
  
  const  context = useContext(UserContext);
  
  const [user, setUser] = [context.nameSesion, context.setNameSesion];
  const [authenticate, setAuthenticate] = [context.authenticate, context.setAuthenticate]
  const [contextToken, setContextToken] = [context.token, context.setToken];
 
  const [startCountDown, setStartCountDown] = useState(context.timeSecurityExit);

  const [hideNav, setHideNav] = useState(false);

  useEffect(()=>{
    if(hideNav){
      linkNavRef.current.style.display = "none";
    }
    else
     linkNavRef.current.style.display = "";
  },[hideNav])
  
  
  
  //Verifica si hay guardado algún token valido en el registro de las cookies
  useEffect(()=>{
    if(contextToken && user){
       setAuthenticate(true);
    }
  },[])


  useEffect(()=>{
    
    if(context.timeSecurityExit){
      setStartCountDown(true);
    }
    else
    setStartCountDown(false);
    
  },[context.timeSecurityExit])

  
  
  //cambiar el puntero del ratón(ocupado) mientras se procesa la solicitud
  useEffect(() => {
    document.body.style.cursor = cursorState; 
  }, [cursorState]);  

  
  
  //Borra y desactiva la authenticaficacion 
  const deleteAuthenticate = (()=>{
    setAuthenticate(false);
    document.cookie = 'token="";max-age=-1;'
    document.cookie = 'user="";max-age=-1;'
    document.cookie = 'authorities="";max-age=-1;'
  });



  //Se loguea con el servidor, registra las cookies y activa los elementos nuevos
  const handleFormLogin = async(e) => {
    e.preventDefault();
    setCursorState('wait');

    let requestToken = new Token(user, password);
    
    await requestToken.requestToken()
      .then(() => {
        if (requestToken.loggedIn) {
          setAuthenticate(true);
          setFailRequestAuthenticate(false);
          setContextToken(requestToken.token);
          
        
        } else {
          setFailRequestAuthenticate(true)
          console.log("No se pudo autenticar al usuario." + requestToken.statuscode);
          
          // mostramos el mensaje 5 segundos
          setTimeout(() => {
            setFailRequestAuthenticate(false)
          }, 5000);
        }});
    
    context.authorities.current = requestToken.authorities;
    setCursorState('auto');
  };

  return( 
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light my-2 " aria-label="Barra de menu">
          
          <div className="d-flex justify-content-between container-fluid">
            
             <div className="navbar-brand col-3 d-flex">
                    
                <div>
                  <ul className="navbar-nav  mb-lg-0 ">  
                      <div className="navbar-brand col-1  icon-language me-5 align-center">
                        <NavDropDown title={iconLanguage}>
                        <li className="nav-link  btn-logger size-list-icon d-flex " onClick={()=>{i18n.changeLanguage('es')}}>
                          <img src={iconSpain} className="icon-language ms-2" ></img> 
                          <div className="ms-2">{t('espanol')}</div>
                        </li> 
                        <li className="nav-link active btn-logger size-list-icon d-flex " onClick={()=>{i18n.changeLanguage('en')}}>
                          <img src={iconEnglish} className="icon-language ms-2"></img>
                          <div className="ms-2">{t('ingles')}</div>
                        </li> 
                        <li className="nav-link active btn-logger size-list-icon d-flex " onClick={()=>{i18n.changeLanguage('fr')}}>
                          <img src={iconFrench} className="icon-language ms-2"></img>
                          <div className="ms-2">{t('frances')}</div>
                        </li> 
                        </NavDropDown>
                      </div>
                  </ul>
                </div>
            
            <div>
                    <Link className="nav-link active btn-menu" aria-current="page" to="/" style={{fontSize:20}}>{t('restaurante')}</Link>
                    </div>
              </div>
            
              <button className="navbar-toggler" 
                onClick ={()=>{
                  if(hideNav) setHideNav(false);
                  }}
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarsExample07XL" 
                aria-controls="navbarsExample07XL" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                  
            <div className="collapse navbar-collapse" id="navbarsExample07XL" ref={linkNavRef}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active btn-menu" to="carta" onClick={()=>setHideNav(true)}>{t('menus')}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active btn-menu" to="especialidades" onClick={()=>setHideNav(true)}>{t('especialidades')}</Link>
                </li>
                <li className="nav-item ">
                <Link className="nav-link active btn-menu" to="grupo" onClick={()=>setHideNav(true)}>{t('menu-grupo')}</Link>
                </li>
                
                { authenticate &&
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle btn-menu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {t('orientales')}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="nav-item ">
                          <Link className="nav-link active btn-menu" to="cargarRecetas" onClick={()=>setHideNav(true)}>{t('cargar')}</Link>
                          <Link className="nav-link active btn-menu" to="new-receta" onClick={()=>setHideNav(true)}>{t('nueva-receta')}</Link>
                    </li>
                    </ul>
                  </li>

                }
             </ul>
             
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
              { !authenticate && 
                  <NavDropDown title={t('login')}>
                    
                    <li className="nav-item ">
                      <form className="m-3" onSubmit={handleFormLogin}>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder=""
                                value={user} onChange={(e)=>(setUser(e.target.value))} />
                          <label htmlFor="floatingInput">{t('usuario')}</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder=""
                            value={password} onChange={(e)=>(setPassword(e.target.value))} />
                          <label htmlFor="floatingPassword">{t('password')}</label>
                        </div>
                        <div className="mt-3 d-flex align-items-center">
                            <button  type="submit" className="btn btn-warning w-10" >{t('enviar')}</button>
                        </div>
                        <li><hr className="dropdown-divider"/></li>

                      </form>
                    </li>
                  
                  </NavDropDown>
                }
                
                { authenticate &&
                  <>
                      
                      <NavDropDown title={user}>
                      
                        <Link className="nav-link active btn-logger" to="/reservas" onClick={()=>setHideNav(true)}>{t('mis-reservas')}</Link>
                        {
                          context.authorities.current.includes("ADMIN") &&  
                          <Link className="nav-link btn-logger" to={"new-user"} onClick={()=>setHideNav(true)}>{t('nuevo-usuario')}</Link>
                        }
                        <a className="nav-link active btn-logger" href="#" onClick={deleteAuthenticate}>{t('log-out')}</a>
                      
                      </NavDropDown>
                      <li className="nav-link">
                        
                        <small className="text-danger">
                          {startCountDown && <Countdown logout={setAuthenticate}/>}
                        </small>
                      </li>   
                  </>
              }
              </ul>
              
              <Link className="nav-link btn-reserva" to={"reserva"} onClick={()=>setHideNav(true)}>{t('reservas')}</Link>
               
               {/* En caso de error en la autentificacion mostramos el mensaje*/}
               {failRequestAuthenticate &&
                <div className="position-absolute top-1 end-0 mt-2 me-2">
                  <div className="alert alert-danger error-autentificacion" role="alert">
                    Credenciales no válidos
                  </div>
                </div>
              }

            </div>
          </div>
        </nav>  
      </div>  
    
  )
}
export default Nav;
