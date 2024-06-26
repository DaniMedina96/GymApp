import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a GymApp</h1>
        <p>Tu compañero de confianza para planificar y seguir tus rutinas de gimnasio.</p>
      </header>
      <main className="home-main">
        <section className="home-section">
          <h2>Nuestras Características</h2>
          <ul>
            <li>Planifica tus rutinas personalizadas.</li>
            <li>Agrega y organiza ejercicios.</li>
            <li>Sigue tu progreso.</li>
            <li>Comparte tus rutinas con amigos.</li>
          </ul>
        </section>
        <section className="home-section">
          <h2>Comienza Ahora</h2>
          <p>Regístrate y crea tu primera rutina hoy mismo.</p>
          <button className="home-button">Registrarse</button>
        </section>
      </main>
    </div>
  );
}

export default Home;
