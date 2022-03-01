import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import NumberFilter from './components/NumberFilter';

function App() {
  return (
    <PlanetsProvider>
      <SearchBar />
      <NumberFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
