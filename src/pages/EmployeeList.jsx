import { Link } from "react-router-dom";
import { useEmployeeContext } from "../context";
import DataTableComponent from "../components/DataTableComponent/DataTableComponent";
import { getEmployeesFromLocalStorage } from "../utils/localStorage";

export default function EmployeeList() {
  const { employees } = useEmployeeContext();
  // console.log(employees);

  const localStorageEmployees = getEmployeesFromLocalStorage();

  const allEmployees = localStorageEmployees.length > 0 ? localStorageEmployees : employees;
  // console.log(allEmployees);

  return (
    <div className="container container-employee">
      <h1>Current Employees</h1>
      
      <DataTableComponent data={allEmployees}/>
      <Link to={"/"} className="home-btn">Home</Link>
    </div>
  )
}
