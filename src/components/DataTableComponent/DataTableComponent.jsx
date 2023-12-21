import PropTypes from 'prop-types';
import { useState } from "react";
import DataTable from "react-data-table-component";
import SearchInput from "../SearchInput/SearchInput";
import { formatDate } from "../../utils/formatDate";

// Définition des types des props attendues par le composant
DataTableComponent.propTypes = {
  // Données à afficher dans le tableau
  data: PropTypes.array.isRequired,
};

export default function DataTableComponent({ data }) {

  // État pour gérer les enregistrements
  const [records, setRecords] = useState(data);

  // Fonction pour gérer le filtrage des données
  function handleFilter(event) {
    const searchValue = event.target.value;
    // console.log(searchValue);
    const newData = data.filter((item) => {
      // console.log(item);
      return (
        item.firstName.toLowerCase().includes(searchValue) ||
        item.lastName.toLowerCase().includes(searchValue) ||
        formatDate(item.startDate).toLowerCase().includes(searchValue) ||
        formatDate(item.dateOfBirth).toLowerCase().includes(searchValue) ||
        item.department.toLowerCase().includes(searchValue) ||
        item.street.toLowerCase().includes(searchValue) ||
        item.city.toLowerCase().includes(searchValue) ||
        item.state.toLowerCase().includes(searchValue) ||
        item.zipCode.toString().toLowerCase().includes(searchValue)
      );
    });
    setRecords(newData);
  }

  // Définition des colonnes du tableau
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
      minWidth: "160px",
      allowOverflow: true,
      wrap: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  // Options de pagination
  const paginationComponentOptions = {
    rowsPerPageText: "Show",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  // Styles personnalisés pour le tableau
  const customStyles = {
    headCells: {
      style: {
        justifyContent: "center",
        fontWeight: "600",
      },
    },
    cells: {
      style: {
        fontSize: "12px",
      },
    },
  };

  return (
    <>
      <SearchInput onSearchChange={handleFilter} />
      <DataTable
        columns={columns}
        data={records}
        fixedHeader
        pagination
        paginationComponentOptions={paginationComponentOptions}
        customStyles={customStyles}
        persistTableHead
      />
    </>
  );
}
