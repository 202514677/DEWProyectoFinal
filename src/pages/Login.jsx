import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login({ setView }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function ingresar(e) {
    e.preventDefault();

    if (login(username, password)) {
      setView("dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div className="container">
      <h2>Ingreso al sistema</h2>

      <form onSubmit={ingresar}>
        <input
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Clave"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="primary" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}
