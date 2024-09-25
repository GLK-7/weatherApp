import { useState } from 'react';
import './App.css';
import Busca from './components/Busca';
import ClimaAtual from './components/ClimaAtual';
import Previsao from './components/Previsao';

function App() {
  return (
    <div>
      <h1>Condições Climáticas</h1>
      <Busca />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;
