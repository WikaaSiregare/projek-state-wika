import React from 'react';
import './App.css';
import Table from './components/Table';
import ButtonClickHandler from './components/ButtonClickHandler'; // Importing the ButtonClickHandler component

function App() {
  return (
    <div className="App">
      <h1>Data Keluarga</h1>
      <Table judul="Data Keluarga" />
      <h1>Button Click Handler</h1>
      <ButtonClickHandler /> {/* Rendering the ButtonClickHandler component */}
    </div>
  );
}

export default App;
