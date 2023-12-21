import PropTypes from 'prop-types';

// Définition des types des props attendues par le composant
SearchInput.propTypes = {
  // Fonction à appeler lorsqu'il y a un changement dans le champ de recherche
  onSearchChange: PropTypes.func.isRequired,
};

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
