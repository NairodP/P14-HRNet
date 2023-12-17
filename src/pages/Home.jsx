import "../css/pages/allPages.css";
import { Link } from "react-router-dom";
import CreateEmployeeForm from "../components/CreateEmployeeForm/CreateEmployeeForm";
export default function Home() {

  return (
    <div className="container">
      <h1>HRnet</h1>
      <Link to={"/employee-list"} className="home-btn-link">View Current Employees</Link>
      <h2>Create Employee</h2>
      <CreateEmployeeForm />
    </div>
  );
}
