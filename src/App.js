import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <PlanetsProvider>
      <SearchBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
