import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsAPI from '../services/FetchPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]); // estado referente aos dados da API
  const [loading, setLoading] = useState(true); // estado referente a chamada do componente Loading
  const [filterByName, setFilterByName] = useState({ name: '' }); // estado referente ao filtro por nome do planeta

  // Requisição à API
  const getResultsApi = async () => {
    fetchPlanetsAPI() // função que faz requisição à API
      .then((response) => {
        response.results.forEach((element) => delete element.residents); // eliminação da chave "residentes", conforme solicitado no Requisito 1
        setData(response.results); // atualiiza estado dos dados da API
        setLoading(false); // atualiza estado referente a chamada do comp. Loading
      });
  };

  // Função que faz requisição à API e chamada quando o componente é montado
  // equivalente ao componentDidMount
  useEffect(() => {
    getResultsApi();
  }, []);

  const contextValue = {
    getResultsApi,
    data,
    loading,
    filterByName,
    setFilterByName,
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
