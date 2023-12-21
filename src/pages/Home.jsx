import "../css/pages/allPages.css";
import { Link } from "react-router-dom";
// Import du formulaire de création d'employé
import CreateEmployeeForm from "../components/CreateEmployeeForm/CreateEmployeeForm";
export default function Home() {

  return (
    <div className="container">
      <h1>HRnet</h1>
      {/* Lien vers la liste des employés */}
      <Link to={"/employee-list"} className="home-btn-link">View Current Employees</Link>
      <h2>Create Employee</h2>
      {/* Affichage du composant gérant le formulaire de création d'employé */}
      <CreateEmployeeForm />
    </div>
  );
}
