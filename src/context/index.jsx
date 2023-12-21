import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

const EmployeeContext = createContext();

const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    // Ajoutez d'autres cas pour la mise à jour ou la suppression des employés si nécessaire
    default:
      return state;
  }
};

export const EmployeeProvider = ({ children }) => {
  const [employees, dispatch] = useReducer(employeeReducer, []);

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Définition des types des props attendues par le composant EmployeeProvider
EmployeeProvider.propTypes = {
  // Les composants enfants de EmployeeProvider
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error(`useEmployeeContext doit être utilisé à l'intérieur d'EmployeeProvider.`);
  }
  return context;
};