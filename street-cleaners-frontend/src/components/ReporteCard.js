import React from 'react';

export function ReporteCard({ reporte, onCambiarEstado }) {
  const colorEstado = {
    'Pendiente': '#d32f2f',
    'En proceso': '#f57c00',
    'Resuelto': '#388e3c'
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{reporte.ubicacion}</h3>
        <span style={{ backgroundColor: colorEstado[reporte.estado] || '#555', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem' }}>
          {reporte.estado}
        </span>
      </div>
      <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#555' }}>
        <strong>Tipo:</strong> {reporte.tipoResiduo} | <strong>Fecha:</strong> {reporte.fecha}
      </p>
      <p style={{ margin: '8px 0', color: '#444' }}>{reporte.descripcion}</p>
      <div style={{ marginTop: '12px' }}>
        <label style={{ fontSize: '0.85rem', marginRight: '8px' }}>Actualizar estado:</label>
        <select value={reporte.estado} onChange={(e) => onCambiarEstado(reporte.id, e.target.value)} style={{ padding: '4px 8px', borderRadius: '4px' }}>
          <option value="Pendiente">Pendiente</option>
          <option value="En proceso">En proceso</option>
          <option value="Resuelto">Resuelto</option>
        </select>
      </div>
    </div>
  );
}
