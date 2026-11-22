import React, { useState } from 'react';
import { REPORTES_INICIALES } from './data/mockReportes';
import { Navbar } from './components/Navbar';
import { DashboardView } from './views/DashboardView';
import { NuevoReporteView } from './views/NuevoReporteView';

function App() {
  const [reportes, setReportes] = useState(REPORTES_INICIALES);
  const [vistaActual, setVistaActual] = useState('dashboard');

  const agregarReporte = (nuevoReporte) => {
    setReportes([nuevoReporte, ...reportes]);
    setVistaActual('dashboard');
  };

  const cambiarEstadoReporte = (id, nuevoEstado) => {
    setReportes(reportes.map(rep => rep.id === id ? { ...rep, estado: nuevoEstado } : rep));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Navbar vistaActual={vistaActual} cambiarVista={setVistaActual} totalReportes={reportes.length} />
      <main style={{ maxWidth: '800px', margin: '25px auto', padding: '0 20px' }}>
        {vistaActual === 'dashboard' ? (
          <DashboardView reportes={reportes} onCambiarEstado={cambiarEstadoReporte} />
        ) : (
          <NuevoReporteView onAgregarReporte={agregarReporte} onCancelar={() => setVistaActual('dashboard')} />
        )}
      </main>
    </div>
  );
}

export default App;
