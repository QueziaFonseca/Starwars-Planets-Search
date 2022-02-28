import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Loading from './Loading';

function Table() {
  const {
    data,
    loading,
    filterByName } = useContext(PlanetsContext);
  const [filteredData, setFilteredData] = useState(data); // array filtrado renderizado na tabela

  // Atualiza array filtrado que será renderizado na tebela
  useEffect(() => {
    const search = data.filter((planet) => planet.name.includes(filterByName.name)); // filtra o array da tabela de acordo com o
    setFilteredData(search); // atualiza o array filtrado
  }, [data, filterByName]);

  if (loading) { return <Loading />; }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation Period</th>
          <th>orbitalPeriod</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surfaceWater</th>
          <th>population</th>

          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((dataElement) => (
          <tr key={ dataElement.name }>
            <td>{dataElement.name}</td>
            <td>{dataElement.rotation_period}</td>
            <td>{dataElement.orbital_period}</td>
            <td>{dataElement.diameter}</td>
            <td>{dataElement.climate}</td>
            <td>{dataElement.gravity}</td>
            <td>{dataElement.terrain}</td>
            <td>{dataElement.surface_water}</td>
            <td>{dataElement.population}</td>

            <td>{dataElement.films}</td>
            <td>{dataElement.created}</td>
            <td>{dataElement.edited}</td>
            <td>{dataElement.url}</td>
          </tr>

        ))}

      </tbody>
    </table>
  );
}
export default Table;
