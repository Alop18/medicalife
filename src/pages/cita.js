import agendaCita from '../assets/img/citas.png';
import Header from '../components/header';
const Cita = () =>{
    return  <div>
        <Header/>
        <section class="cont-section">
            <div class="cont-cita">
                <h1>Encuentra tu especialista y pide cita</h1>
                <p>Más de 60 mil profesionales están aquí para ayudarte.</p>
                <div class="search-box">
                    <div class="search-fields">
                        <select id='search-select'>
                            <option>PEDIATRÍA</option>
                            <option>PSICOLOGÍA</option>
                            <option>PSIQUIATRIA</option>
                        </select>
                        <button class="search-button">Buscar</button>
                    </div>
                </div>
            </div>
            <div class="hero-image">
                <img src={agendaCita}/>
            </div>
        </section>

        
    </div>}
export default Cita;