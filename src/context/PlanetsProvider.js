import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsAPI from '../services/FetchPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const planetsAPI = fetchPlanetsAPI();
  // loop infinito setData(planetsAPI);

  const getResultsApi = async () => {
    fetchPlanetsAPI()
      .then((response) => {
        response.results.forEach((element) => delete element.residents);
        setData(response.results);
        setLoading(false);
      });
  };

  useEffect(() => {
    getResultsApi();
  }, []);

  const contextValue = {
    getResultsApi,
    data,
    loading,
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
