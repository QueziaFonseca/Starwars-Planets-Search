import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchBar() {
  const {
    loading, filterByName, setFilterByName } = useContext(PlanetsContext);

  return (
    <section>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          placeholder="Planet Name"
          value={ filterByName.name }
          onChange={ ({ target }) => setFilterByName({ name: target.value }) }
          disabled={ loading }
        />
      </form>

    </section>

  );
}

export default SearchBar;
