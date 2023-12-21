import { Link } from "react-router-dom";
// Import du hook personnalisé pour accéder au contexte des employés
import { useEmployeeContext } from "../context";
// Import du composant DataTableComponent pour l'affichage des données sous forme de tableau
import DataTableComponent from "../components/DataTableComponent/DataTableComponent";
// Import de la fonction utilitaire pour récupérer les employés depuis le stockage local
import { getEmployeesFromLocalStorage } from "../utils/localStorage";

export default function EmployeeList() {
  // Utilisation du hook pour récupérer le contexte des employés
  const { employees } = useEmployeeContext();

  // Récupération des employés depuis le stockage local
  const localStorageEmployees = getEmployeesFromLocalStorage();

  // Choix des employés à afficher (stockage local ou contexte)
  const allEmployees = localStorageEmployees.length > 0 ? localStorageEmployees : employees;

  return (
    <div className="container container-employee">
      <h1>Current Employees</h1>
      
      <DataTableComponent data={allEmployees}/>
      <Link to={"/"} className="home-btn">Home</Link>
    </div>
  )
}
