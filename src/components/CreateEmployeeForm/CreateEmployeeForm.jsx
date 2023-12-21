import "./createEmployeeForm.css";
import { useState } from "react";
import FormField from "../FormField/FormField";
import DropdownInput from "../DropdownInput/DropdownInput";
import statesData from "../../assets/data/states.json";
import { validationForm } from "../../utils/validationForm";
import { transformEmployeeData } from "../../utils/transformEmployeeDatas";
import { useEmployeeContext } from "../../context";
import { Modal } from "@nairodp/modal";

export default function CreateEmployeeForm() {
  const [openModal, setOpenModal] = useState(false);

  // Fonction pour sauvegarder les données dans le Local Storage
  function saveToLocalStorage(data) {
    const existingData = JSON.parse(localStorage.getItem("employeeData")) || [];
    existingData.push(data);
    localStorage.setItem("employeeData", JSON.stringify(existingData));
  }

  // Contexte pour gérer les employés
  const { dispatch } = useEmployeeContext();

  // État pour gérer les données du formulaire
  const [employeeDatas, setEmployeeDatas] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
    department: "Sales",
  });

  // État pour gérer les erreurs du formulaire
  const [errors, setErrors] = useState({});

  // Fonction pour gérer les changements dans les champs de saisie
  function handleInput(e) {
    const field = e.target.id;
    const value = e.target.value;
    const newObj = { ...employeeDatas, [field]: value };
    setEmployeeDatas(newObj);
  }

  // Fonction pour sauvegarder l'employé
  const saveEmployee = (e) => {
    e.preventDefault();
    // Validation des données du formulaire
    const errors = validationForm(employeeDatas);
    // console.log(errors);

    // Vérifiez s'il y a des erreurs
    if (Object.keys(errors).length === 0) {
      // console.log("Pas d'erreur !");
      // Pas d'erreur, ouverture de la modal de succès
      setOpenModal(true);

      // Appliquer les transformations sur les données de l'employé
      const transformedData = transformEmployeeData(employeeDatas);

      // Enregistrez les données dans le Local Storage
      saveToLocalStorage(transformedData);

      // Envoyez les données uniquement s'il n'y a pas d'erreur
      dispatch({ type: "ADD_EMPLOYEE", payload: transformedData });

      // Réinitialisez les erreurs
      setErrors(errors);
      // Réinitialisez les données de l'employé
      setEmployeeDatas({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "Alabama",
        zipCode: "",
        department: "Sales",
      });
    } else {
      // console.log("Il y a des erreurs quelque part...");
      // Il y a des erreurs, mise à jour des erreurs dans l'état local
      setErrors(errors);
    }
  };

  return (
    <div>
      <form action="#" id="create-employee" autoComplete="off">
        <FormField
          label="First Name"
          type="text"
          id="firstName"
          value={employeeDatas.firstName}
          onChange={handleInput}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}

        <FormField
          label="Last Name"
          type="text"
          id="lastName"
          value={employeeDatas.lastName}
          onChange={handleInput}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}

        <FormField
          label="Date of Birth"
          type="date"
          id="dateOfBirth"
          value={employeeDatas.dateOfBirth}
          onChange={handleInput}
        />
        {errors.dateOfBirth && (
          <div className="error">{errors.dateOfBirth}</div>
        )}

        <FormField
          label="Start Date"
          type="date"
          id="startDate"
          value={employeeDatas.startDate}
          onChange={handleInput}
        />
        {errors.startDate && <div className="error">{errors.startDate}</div>}

        <fieldset>
          <legend>Address</legend>
          <FormField
            label="Street"
            type="text"
            id="street"
            value={employeeDatas.street}
            onChange={handleInput}
          />
          {errors.street && <div className="error">{errors.street}</div>}

          <FormField
            label="City"
            type="text"
            id="city"
            value={employeeDatas.city}
            onChange={handleInput}
          />
          {errors.city && <div className="error">{errors.city}</div>}

          <DropdownInput
            label="State"
            type="select"
            id="state"
            value={employeeDatas.state}
            onChange={(field, value) => handleInput(field, value)}
            options={statesData.map((state) => state.name)}
          />

          <FormField
            label="Zip Code"
            type="number"
            id="zipCode"
            value={employeeDatas.zipCode}
            onChange={handleInput}
          />
          {errors.zipCode && <div className="error">{errors.zipCode}</div>}
        </fieldset>

        <DropdownInput
          label="Department"
          id="department"
          value={employeeDatas.department}
          onChange={(field, value) => handleInput(field, value)}
          options={[
            "Sales",
            "Marketing",
            "Engineering",
            "Human Resources",
            "Legal",
          ]}
        />
        <button className="saveBtn" onClick={saveEmployee}>
          Save
        </button>
      </form>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <p>Employee Created!</p>
      </Modal>
    </div>
  );
}
