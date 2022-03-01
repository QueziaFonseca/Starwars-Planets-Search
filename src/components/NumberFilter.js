import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumberFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    columnsOptions,
    setColumnsOptions,
  } = useContext(PlanetsContext);

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleClick = () => {
    setFilterByNumericValues(
      [...filterByNumericValues, { column, comparison, value }],
    );
    setColumnsOptions(
      columnsOptions.filter((item) => item !== column),
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
