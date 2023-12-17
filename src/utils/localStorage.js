export const getEmployeesFromLocalStorage = () => {
  const localStorageData = localStorage.getItem("employeeData");
  return localStorageData ? JSON.parse(localStorageData) : [];
};