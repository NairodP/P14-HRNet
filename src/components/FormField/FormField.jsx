/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./formField.css";
import { handleKeyPress } from "../../utils/validationForm";

export default function FormField({ label, type, id, value, onChange }) {
  const isDate = type === "date";
  const isNumeric = type === "number";

  return (
    <div className={`field-container ${id}`}>
      <input
        className="input"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => handleKeyPress(e, isNumeric)}
        autoComplete="off"
      />
      <label
        className={`label ${value !== "" || isDate ? "not-empty" : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
