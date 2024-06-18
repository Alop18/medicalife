import { Outlet } from "react-router-dom";
import fondoInicio from '../assets/img/medical1.png';
import img1 from '../assets/img/psicologia.jpg';
import img2 from '../assets/img/odontologia.jpeg';
import img3 from '../assets/img/card1.jpeg';
import img4 from '../assets/img/psiquiatria.jpeg';
import img5 from '../assets/img/dermatologia.jpeg';
import img6 from '../assets/img/pediatria.jpeg';
import imgFooter from '../assets/img/footer-medical.png';
const Layout = () =>{
    return  <div>
        <div class="header">
            <div class="medical">
                <h1>MEDICALIFE</h1>
            </div>
            <div class="sesion">
                <ul>
                    <li>
                        <a href="/login">INICIAR SESIÓN</a>
                        <a href="/Registro">REGISTRATE</a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="cont-fondo">
            <div id="fondo">
                <img src={fondoInicio}/>
                <div class="cita">
                    <a href="/cita" class="button-cita">AGENDA TU CITA</a>
                </div>
            </div>
        </div>
        <div class="info-medical">
            <h1>SERVICIO DE MEDICINA GENERAL PARA PARTICULARES</h1>
            <p>
                Como IPS particular prestamos el servicio de consulta médica general para usuarios particulares 
                que deseen un servicio humano, oportuno y de calidad.</p>

            <p>   El servicio de medicina general está disponible para todas las personas que quieran realizar 
                consultas particulares de cualquier tipo. Puede solicitar este servicio visitándonos en nuestra
                dirección  en los horarios de atención, llamando por nuestras líneas 
                de atención disponibles.</p>

            <p>    En MEDICALIFE IPS humanizamos la atención médica general, prestando un servicio personalizado 
                y de calidad para su tranquilidad y bienestar.
            </p>
        </div> 
        <div class="services-section">
            <div class="services-intro">
                <h1>Nuestros servicios</h1>
                <p>Conoce nuestra oferta de servicios especializados. En MEDICALIFE contamos con profesionales 
                de mucha experiencia y 100% comprometidos para brindarle la mejor atención.</p>
            </div>
            <div class="services-cards">
                <div class="service-card">
                    <div class="card-image">
                        <img src={img1}/>
                    </div>
                    <div class="card-info">
                        <p>PSICOLOGÍA</p>
                        <p>Contamos con profesionales idóneos con experiencia en psicología ocupacional 
                        y en psicología clínica, quienes están en capacidad de valorar y hacer intervenciones
                        de apoyo a la salud mental.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="card-image">
                        <img src={img2} />
                    </div>
                    <div class="card-info">
                        <p>ODONTOLOGÍA</p>
                        <p>Información adicional sobre Laboratorio Clínico.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="card-image">
                        <img src={img3}/>
                    </div>
                    <div class="card-info">
                        <p>VISIOMETRÍA Y OPTOMETRÍA</p>
                        <p>Ofrecemos tamizajes visuales para valoración de la capacidad visual
                        para detección de patologías o alteraciones de esta función.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="card-image">
                        <img src={img4}/>
                    </div>
                    <div class="card-info">
                        <p>PSIQUIATRÍA</p>
                        <p> Manejo de trastornos del ánimo; trastornos del sueño, adicciones. </p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="card-image">
                        <img src={img5}/>
                    </div>
                    <div class="card-info">
                        <p>DERMATOLOGÍA</p>
                        <p>Consulta médica especializada, tratamientos para el cuidado de la piel.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="card-image">
                        <img src={img6}/>
                    </div>
                    <div class="card-info">
                        <p>PEDIATRÍA</p>
                        <p>Consulta médica especializada, tratamientos para el cuidado de la piel.</p>
                    </div>
                </div>
            </div>
        </div>
        <footer>
        <div class="footer-content">
            <img src={imgFooter}/>
            <p>&copy; 2024 MEDICALIFE. Todos los derechos reservados.</p>
            <p><a href="contacto.html">Contacto</a> | <a href="privacidad.html">Política de Privacidad</a></p>
        </div>
    </footer>
        <Outlet/>
    </div>
    
}
export default Layout;