import homeImg from "./images/home.jpg";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Control de Gastos Personales</h1>
      </header>

      <div className="form" style={{ maxWidth: 900 }}>
        <h2>Bienvenido</h2>

        <img
          src={homeImg}
          alt="Finanzas"
          style={{ width: "100%", maxWidth: 720, borderRadius: 8 }}
        />

        <p>Gestiona ingresos y gastos de forma sencilla y segura.</p>
      </div>

      <footer>
        Proyecto: Control de Gastos Personales - Desarrollo de Entornos Web 2025
      </footer>
    </div>
  );
}
