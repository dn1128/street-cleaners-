import React, { useState } from 'react';

export function NuevoReporteView({ onAgregarReporte, onCancelar }) {
  const [ubicacion, setUbicacion] = useState('');
  const [tipoResiduo, setTipoResiduo] = useState('Residuos ordinarios');
  const [descripcion, setDescripcion] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!ubicacion.trim() || ubicacion.trim().length < 5) {
      nuevosErrores.ubicacion = 'La ubicación es obligatoria (mínimo 5 caracteres).';
    }
    if (!descripcion.trim() || descripcion.trim().length < 10) {
      nuevosErrores.descripcion = 'Agrega una descripción detallada (mínimo 10 caracteres).';
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;
    onAgregarReporte({ id: Date.now(), ubicacion: ubicacion.trim(), tipoResiduo, descripcion: descripcion.trim(), estado: 'Pendiente', fecha: new Date().toISOString().split('T')[0] });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
      <h2>Registrar Micro-basurero</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Dirección o Sector *</label>
          <input type='text' value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} placeholder='Ej: Calle 72 con Carrera 100' style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          {errores.ubicacion && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errores.ubicacion}</span>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Tipo de Residuo *</label>
          <select value={tipoResiduo} onChange={(e) => setTipoResiduo(e.target.value)} style={{ width: '100%', padding: '8px' }}>
            <option value='Residuos ordinarios'>Residuos ordinarios</option>
            <option value='Escombros y muebles'>Escombros y muebles</option>
            <option value='Residuos reciclables'>Residuos reciclables</option>
            <option value='Residuos peligrosos'>Residuos peligrosos</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Descripción del hallazgo *</label>
          <textarea rows='3' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder='Describe el tamaño y características del punto crítico...' style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          {errores.descripcion && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errores.descripcion}</span>}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type='submit' style={{ padding: '10px 18px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Guardar Reporte</button>
          <button type='button' onClick={onCancelar} style={{ padding: '10px 18px', backgroundColor: '#757575', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
