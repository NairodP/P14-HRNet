import statesData from "../assets/data/states.json";

function convertStateNameToAbbreviation(stateName) {
  const state = statesData.find((s) => s.name === stateName);
  return state ? state.abbreviation : stateName;
}

export function transformEmployeeData(employeeDatas) {
  // Convertir le nom de l'État en abréviation
  const stateAbbreviation = convertStateNameToAbbreviation(employeeDatas.state);

  // Formatter la date de naissance au format JJ/MM/AAAA
  const formattedDateOfBirth = new Date(employeeDatas.dateOfBirth).toLocaleDateString("fr-FR");

  // Formatter la date de début au format JJ/MM/AAAA
  const formattedStartDate = new Date(employeeDatas.startDate).toLocaleDateString("fr-FR");

  // Mettre le prénom en minuscules avec la première lettre en majuscule
  const firstName = employeeDatas.firstName.charAt(0).toUpperCase() + employeeDatas.firstName.slice(1).toLowerCase();

  // Mettre le nom en majuscules
  const lastName = employeeDatas.lastName.toUpperCase();

  // Créer un nouvel objet de données avec les transformations
  const transformedData = {
    ...employeeDatas,
    state: stateAbbreviation,
    dateOfBirth: formattedDateOfBirth,
    startDate: formattedStartDate,
    firstName: firstName,
    lastName: lastName,
  };

  return transformedData;
}