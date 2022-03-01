import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumberFilter() {
  const {
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(PlanetsContext);

  const columnsOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleClick = () => {
    setFilterByNumericValues(
      { column, comparison, value },
    );
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (element) => setColumn(element.target.value) }
      >
        {columnsOptions.map((element, index) => (
          <option
            key={ index }
            value={ element }
          >
            { element }
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ (element) => setComparison(element.target.value) }
      >
        {comparisonOptions.map((option, index) => (
          <option
            key={ index }
            value={ option }
          >
            { option }
          </option>
        ))}
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="value"
        placeholder="type a number"
        value={ value }
        onChange={ (element) => setValue(element.target.value) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>

    </section>
  );
}

export default NumberFilter;
