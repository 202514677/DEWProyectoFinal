import { useEffect, useState } from "react";

export default function NuevoMovimiento({ onSave, editando }) {
  const vacio = { tipo: "Ingreso", categoria: "", descripcion: "", monto: "", fecha: "" };
  const [form, setForm] = useState(vacio);

  useEffect(() => {
    if (editando) setForm(editando);
    else setForm(vacio);
  }, [editando]);

  function submit(e) {
    e.preventDefault();

    if (!form.categoria || !form.descripcion || !form.monto || !form.fecha) {
      alert("Completa todos los campos.");
      return;
    }

    const payload = {
      ...form,
      id: editando?.id || Date.now(),
      monto: Number(form.monto)
    };

    onSave(payload);
    setForm(vacio);
  }

  return (
    <div className="container">
      <h2>{editando ? "Editar Movimiento" : "Nuevo Movimiento"}</h2>

      <form onSubmit={submit}>
        <select value={form.tipo} onChange={e => setForm({ ...form, tipo: e.target.value })}>
          <option value="Ingreso">Ingreso</option>
          <option value="Gasto">Gasto</option>
        </select>

        <input
          placeholder="Categoría (ej: Alimentación)"
          value={form.categoria}
          onChange={e => setForm({ ...form, categoria: e.target.value })}
        />

        <input
          placeholder="Descripción"
          value={form.descripcion}
          onChange={e => setForm({ ...form, descripcion: e.target.value })}
        />

        <input
          type="number"
          step="0.01"
          placeholder="Monto"
          value={form.monto}
          onChange={e => setForm({ ...form, monto: e.target.value })}
        />

        <input
          type="date"
          value={form.fecha}
          onChange={e => setForm({ ...form, fecha: e.target.value })}
        />

        <button className="primary" type="submit">Guardar</button>
      </form>
    </div>
  );
}
