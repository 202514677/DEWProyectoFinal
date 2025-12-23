export default function Dashboard({ movimientos }) {
  const ingresos = movimientos
    .filter(m => m.tipo === "Ingreso")
    .reduce((a, b) => a + Number(b.monto || 0), 0);

  const gastos = movimientos
    .filter(m => m.tipo === "Gasto")
    .reduce((a, b) => a + Number(b.monto || 0), 0);

  const saldo = ingresos - gastos;

  const ultimos = movimientos.slice(0, 5);

  return (
    <div className="container">
      <h2>Resumen general</h2>

      <div className="cards">
        <div className="card ingreso">
          <h4>Ingresos</h4>
          <strong>S/ {ingresos.toFixed(2)}</strong>
        </div>

        <div className="card gasto">
          <h4>Gastos</h4>
          <strong>S/ {gastos.toFixed(2)}</strong>
        </div>

        <div className="card saldo">
          <h4>Saldo</h4>
          <strong>S/ {saldo.toFixed(2)}</strong>
        </div>
      </div>

      <h3>Últimos movimientos</h3>
      {ultimos.length === 0 ? (
        <p>No hay movimientos registrados aún.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Monto (S/)</th>
            </tr>
          </thead>
          <tbody>
            {ultimos.map(m => (
              <tr key={m.id}>
                <td>{m.fecha}</td>
                <td>{m.tipo}</td>
                <td>{m.categoria}</td>
                <td>{m.descripcion}</td>
                <td>{Number(m.monto).toFixed(2)}</td>
              </tr>
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
