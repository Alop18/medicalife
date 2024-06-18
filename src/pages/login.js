import React, {useState} from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/header';

export const Login = () => { 
    const  [Login, SetLogin] = useState("false");
    const [Usu, SetUsu] = useState("");
    const [Pass, SetPass] = useState("");
  
    function InicioSesion(e) {
      e.preventDefault(); //EVITARÁ QUE AL PULSAR EL BOTÓN, LA PÁGINA SE RECARGUE
      var usuario = document.getElementById("usuario").value;
      var password = document.getElementById("password").value;
      if (usuario.length === 0 || password.length === 0 ) {
          alert("POR FAVOR INGRESE LOS DATOS SOLICITADOS");
      }else{
          if (usuario === "admin" && password ==="123"){
              SetLogin("true");//INDICA QUE SE LOGRÓ INICIAR SESIÓN
              document.getElementById("cont-fondo-sesion").style.display = "none";
          }else{
              SetLogin("false");
              alert("ERROR DE USUARIO Y/O CONTRASEÑA");
              document.getElementById("usuario").value = "";
              document.getElementById("password").value = "";
              document.getElementById("usuario").focus();
          }
      }
    }
  return <div>
        <Header/>
        <div id="cont-fondo-sesion">
            <div class="fondo-sesion">
                <div class="form-inicio-sesion">
                    <div class="barra-inicio-sesion" id='barra-registro'>
                        {/* <a href="/">
                            Atras
                        </a> */}
                        <h3>INICIA SESIÓN</h3> 
                    </div>
                    <div class="cont-form">
                        <div class="usuario">
                            <label for="usuario">USUARIO</label>
                            <input type="text" name="usuario" id="usuario" onChange={(e)=>SetUsu(e.target.value)} required/>
                        </div>
                        <div class="contraseña">
                            <label for="password">CONTRASEÑA</label>
                            <input type="password" name="password" id="password" onChange={(e)=>SetPass(e.target.value)} required/>
                        </div>
                        <div class="btn-inicio-sesion">
                            <input id="enviar" type="submit" value="INICIAR SESIÓN" onClick={InicioSesion}/>
                        </div>
                    </div>
                    <div className='sin-cuenta'>
                        <span class="text-muted">¿Todavía sin cuenta?  </span>
                        <a href="/registro">
			                Quiero registrarme
		                </a>
                    </div>
                </div>
            </div>
        </div>
        <Outlet/>
    </div>
}
