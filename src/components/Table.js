import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Loading from './Loading';

function Table() {
  const {

    loading,

    filteredData,
  } = useContext(PlanetsContext);

  if (loading) { return <Loading />; }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation Period</th>
          <th>orbital Period</th>
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
