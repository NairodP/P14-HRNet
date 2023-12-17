/* eslint-disable react/prop-types */
export default function SearchInput({ onSearchChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        onChange={onSearchChange}
        placeholder="Search ..."
      />
    </div>
  );
}
