import React, { useState } from 'react';
import { ReporteCard } from '../components/ReporteCard';

export function DashboardView({ reportes, onCambiarEstado }) {
  const [filtroEstado, setFiltroEstado] = useState('Todos');

  const reportesFiltrados = filtroEstado === 'Todos'
    ? reportes
    : reportes.filter(r => r.estado === filtroEstado);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Puntos Críticos Reportados</h2>
        <div>
          <label style={{ marginRight: '8px' }}>Filtrar por estado:</label>
          <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} style={{ padding: '6px' }}>
            <option value="Todos">Todos</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En proceso">En proceso</option>
            <option value="Resuelto">Resuelto</option>
          </select>
        </div>
      </div>
      {reportesFiltrados.length === 0 ? (
        <p>No hay reportes registrados bajo este filtro.</p>
      ) : (
        reportesFiltrados.map(rep => (
          <ReporteCard key={rep.id} reporte={rep} onCambiarEstado={onCambiarEstado} />
        ))
      )}
    </div>
  );
}
