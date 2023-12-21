import "./dropdownInput.css";
import PropTypes from "prop-types";

// Définition des types des propriétés du composant DropdownInput
DropdownInput.propTypes = {
  label: PropTypes.string.isRequired, // Chaîne de caractères obligatoire pour la propriété label
  id: PropTypes.string.isRequired, // Chaîne de caractères obligatoire pour la propriété id
  value: PropTypes.string.isRequired, // Chaîne de caractères obligatoire pour la propriété value
  onChange: PropTypes.func.isRequired, // Fonction obligatoire pour la propriété onChange
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Tableau de chaînes de caractères obligatoire pour la propriété options
};

export default function DropdownInput({ label, id, value, onChange, options }) {
  return (
    <div className={`field-container ${id}`}>
      <label className={"label-dropdown"} htmlFor={id}>
        {label}
      </label>
      <select className="dropdown" id={id} value={value} onChange={onChange} autoComplete="off">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
