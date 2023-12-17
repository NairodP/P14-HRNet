/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';

const EmployeeContext = createContext();

const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    // Add other cases for updating or deleting employees if needed.
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

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error('useEmployeeContext must be used within an EmployeeProvider');
  }
  return context;
};