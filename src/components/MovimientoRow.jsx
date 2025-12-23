export default function MovimientoRow({ m, onEdit, onDelete }) {
  return (
    <tr>
      <td>{m.fecha}</td>
      <td>{m.tipo}</td>
      <td>{m.categoria}</td>
      <td>{m.descripcion}</td>
      <td>S/ {Number(m.monto).toFixed(2)}</td>
      <td>
        <button className="edit" onClick={() => onEdit(m)}>✏️</button>{" "}
        <button className="delete" onClick={() => onDelete(m.id)}>🗑️</button>
      </td>
    </tr>
  );
}
