import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assets/views/Login';
import Venta from './assets/views/Venta';
import Productos from './assets/views/Productos';
import Inventario from './assets/views/Inventario';
import Proveedores from './assets/views/Proveedores';
import Clientes from './assets/views/Clientes';
import Corte from './assets/views/Corte';
import Reportes from './assets/views/Reportes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tabVenta" element={<Venta />} />
        <Route path="/tabProductos" element={<Productos />} />
        <Route path="/tabInventario" element={<Inventario />} />
        <Route path="/tabProveedores" element={<Proveedores />} />
        <Route path="/tabClientes" element={<Clientes />} />
        <Route path="/tabCorte" element={<Corte />} />
        <Route path="/tabReportes" element={<Reportes />} />
      </Routes>
    </Router>
  );
}

export default App;