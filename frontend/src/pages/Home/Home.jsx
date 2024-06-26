import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bienvenido a GymApp</h1>
        <p>Tu compañero de confianza para planificar y seguir tus rutinas de gimnasio.</p>
        <Link to="/signup" className="hero-button-link">
          <button className="hero-button">Comienza Ahora</button>
        </Link>
      </div>
      <main className="home-main">
        <section className="home-section">
          <h2>Nuestras Características</h2>
          <ul className="home-features">
            <li>Planifica tus rutinas personalizadas.</li>
            <li>Agrega y organiza ejercicios.</li>
            <li>Sigue tu progreso.</li>
            <li>Comparte tus rutinas con amigos.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;

