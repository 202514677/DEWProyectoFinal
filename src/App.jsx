import { useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NuevoMovimiento from "./pages/NuevoMovimiento";
import Historial from "./pages/Historial";
import QuienesSomos from "./pages/QuienesSomos";
import Login from "./pages/Login";

const STORAGE_KEY = "movimientos";

export default function App() {
  const [view, setView] = useState("home");
  const [movimientos, setMovimientos] = useState([]);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    setMovimientos(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movimientos));
  }, [movimientos]);

  function guardar(m) {
    setMovimientos(prev =>
      prev.some(x => x.id === m.id)
        ? prev.map(x => (x.id === m.id ? m : x))
        : [m, ...prev]
    );
    setEditando(null);
    setView("dashboard");
  }

  function eliminar(id) {
    setMovimientos(prev => prev.filter(x => x.id !== id));
  }

  return (
    <AuthProvider>
      <Navbar setView={setView} />

      {view === "home" && <Home />}
      {view === "dashboard" && <Dashboard movimientos={movimientos} />}
      {view === "nuevo" && <NuevoMovimiento onSave={guardar} editando={editando} />}
      {view === "historial" && (
        <Historial
          movimientos={movimientos}
          onEdit={m => { setEditando(m); setView("nuevo"); }}
          onDelete={eliminar}
        />
      )}
      {view === "quienes" && <QuienesSomos />}
      {view === "login" && <Login setView={setView} />}
    </AuthProvider>
  );
}
