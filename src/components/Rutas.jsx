import React from 'react';
import {Routes, Route, Redirect, Navigate} from 'react-router-dom'

import Results from './Results'

const Rutas = () => {
  return (
    <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/search" />}/>
          <Route path="/search" element={<Results />} />
          <Route path="/images" element={<Results />} />
          <Route path="/Videos" element={<Results />} />
        </Routes>
    </div>
  );
};

export default Rutas;
