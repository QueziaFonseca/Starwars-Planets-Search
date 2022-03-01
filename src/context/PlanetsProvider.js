import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsAPI from '../services/FetchPlanetsApi';

function PlanetsProvider({ children }) {
  // Req 1: estado referente aos dados da API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // estado referente a chamada do componente Loading

  // Req 2:estado referente ao filtro por nome do planeta
  const [filterByName, setFilterByName] = useState({ name: '' });
  // Req 3 e 4:
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  // Req 5: estado que controla o array dos options do select Column
  const [columnsOptions, setColumnsOptions] = useState(
    ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'],
  );

  // Requisição à API
  const getResultsApi = async () => {
    fetchPlanetsAPI() // função que faz requisição à API
      .then((response) => {
        response.results.forEach((element) => delete element.residents); // eliminação da chave "residentes", conforme solicitado no Requisito 1
        setData(response.results); // atualiiza estado dos dados da API
        setLoading(false); // atualiza estado referente a chamada do comp. Loading
      });
  };
  // Req1: chamando a Função que faz requisição à API e chamada quando o componente é montado, equivalente ao componentDidMount
  useEffect(() => {
    getResultsApi();
  }, []);
  // Req2: Filtra o array de planetas pelo nome e atualiza o array que é mapeado e renderizado na tabela
  useEffect(() => {
    const search = data.filter((planet) => planet.name.includes(filterByName.name)); // filtra o array da tabela de acordo com o nome
    setFilteredData(search); // atualiza o array filtrado
  }, [data, filterByName]);

  // Req 3 e 4: Filtra por comparação. Para este requisito consultei o PR de Regiane em : https://github.dev/tryber/sd-017-project-starwars-planets-search/pull/99/commits/21970f62f3b9eb5c901ca810099d2e127f6abd48

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      const lastNumericFilter = filterByNumericValues[filterByNumericValues.length - 1];
      switch (lastNumericFilter.comparison) {
      case 'maior que':
        setFilteredData(filteredData
          .filter((planet) => parseInt(
            planet[lastNumericFilter.column], 10,
          ) > lastNumericFilter.value));
        break;
      case 'menor que':
        setFilteredData(filteredData
          .filter((planet) => parseInt(
            planet[lastNumericFilter.column], 10,
          ) < lastNumericFilter.value));
        break;
      case 'igual a':
        setFilteredData(filteredData.filter((
          planet,
        ) => planet[lastNumericFilter.column] === lastNumericFilter.value));
        break;
      default:
        break;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  const contextValue = {
    getResultsApi,
    data,
    loading,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filteredData,
    setFilteredData,
    columnsOptions,
    setColumnsOptions,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default PlanetsProvider;
