import MovimientoRow from "../components/MovimientoRow";

export default function Historial({ movimientos, onEdit, onDelete }) {
  return (
    <div className="container">
      <h2>Historial</h2>

      {movimientos.length === 0 ? (
        <p>No hay movimientos registrados aún.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Monto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map(m => (
              <MovimientoRow key={m.id} m={m} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      )}

      <footer>
        Proyecto: Control de Gastos Personales - Desarrollo de Entornos Web 2025
      </footer>
    </div>
  );
}
