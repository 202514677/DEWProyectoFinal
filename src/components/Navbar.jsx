import { useAuth } from "../context/AuthContext";

export default function Navbar({ setView }) {
  const { user, logout } = useAuth();

  return (
    <nav>
      <button onClick={() => setView("home")}>Inicio</button>
      <button onClick={() => setView("dashboard")}>Dashboard</button>
      <button onClick={() => setView("nuevo")}>Nuevo movimiento</button>
      <button onClick={() => setView("historial")}>Historial</button>
      <button onClick={() => setView("quienes")}>Quiénes Somos</button>

      {!user && <button onClick={() => setView("login")}>Ingreso</button>}

      {user && (
        <>
          <span>👤 {user.nombre}</span>
          <button onClick={logout}>Salir</button>
        </>
      )}
    </nav>
  );
}
