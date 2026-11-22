import React from 'react';

export function Navbar({ vistaActual, cambiarVista, totalReportes }) {
  const btnStyle = (vista) => ({
    padding: '8px 16px',
    marginRight: '10px',
    backgroundColor: vistaActual === vista ? '#1b5e20' : '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: vistaActual === vista ? 'bold' : 'normal'
  });

  return (
    <nav style={{ backgroundColor: '#2e7d32', padding: '15px 25px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <strong style={{ fontSize: '1.2rem' }}>Street Cleaners</strong>
        <span style={{ marginLeft: '15px', fontSize: '0.9rem', opacity: 0.9 }}>
          Reportes activos: {totalReportes}
        </span>
      </div>
      <div>
        <button style={btnStyle('dashboard')} onClick={() => cambiarVista('dashboard')}>
          Panel de Reportes
        </button>
        <button style={btnStyle('nuevo')} onClick={() => cambiarVista('nuevo')}>
          + Nuevo Reporte
        </button>
      </div>
    </nav>
  );
}
