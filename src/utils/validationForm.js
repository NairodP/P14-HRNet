/**
 * Fonction de validation du formulaire d'employé.
 * @param {object} employeeDatas - Les données de l'employé à valider.
 * @returns {object} - Les erreurs de validation du formulaire.
 */

export function validationForm(employeeDatas) {
  const errors = {};

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
  const birthDate = new Date(employeeDatas.dateOfBirth);
  const now = new Date();
  const startDate = new Date(employeeDatas.startDate);
  const streetRegex = /^[0-9A-Za-zÀ-ÖØ-öø-ÿ\s.,-]+$/;
  const cityRegex = /^[A-Za-z\s-]+/;
  const zipCodeRegex = /^[0-9]{5}$/;
  const majeur = now.getFullYear() - birthDate.getFullYear() >= 18;

  if (employeeDatas.firstName === "") {
    errors.firstName = "Le prénom est requis.";
  } else if (!nameRegex.test(employeeDatas.firstName)) {
    errors.firstName = "Le prénom doit contenir que des lettres.";
  }

  if (employeeDatas.lastName === "") {
    errors.lastName = "Le nom est requis.";
  } else if (!nameRegex.test(employeeDatas.lastName)) {
    errors.lastName = "Le nom doit contenir que des lettres.";
  }

  if (isNaN(birthDate)) {
    errors.dateOfBirth = "La date de naissance est requise.";
  } else if (birthDate >= now) {
    errors.dateOfBirth = "La date de naissance est invalide.";
  } else if (birthDate.getFullYear() < 1923) {
    errors.dateOfBirth =
      "La date de naissance ne peut pas être antérieure à 1923.";
  } else if (majeur === false) {
    errors.dateOfBirth = "L'employé doit être majeur (au moins 18 ans).";
  }

  if (isNaN(startDate)) {
    errors.startDate = "La date de début est requise.";
  } else if (startDate > now) {
    errors.startDate = "La date de début est invalide.";
  } else if (startDate.getFullYear() < birthDate.getFullYear()) {
    errors.startDate =
      "La date de début ne peut pas être antérieure à la date de naissance.";
  }

  if (employeeDatas.street === "") {
    errors.street = "L'adresse est requise.";
  } else if (!streetRegex.test(employeeDatas.street)) {
    errors.street = "L'adresse est invalide.";
  }

  if (employeeDatas.city === "") {
    errors.city = "La ville est requise.";
  } else if (!cityRegex.test(employeeDatas.city)) {
    errors.city = "La ville est invalide.";
  }

  if (employeeDatas.zipCode === "") {
    errors.zipCode = "Le code postal est requis.";
  } else if (!zipCodeRegex.test(employeeDatas.zipCode)) {
    errors.zipCode = "Le code postal est invalide.";
  }

  return errors;
}

/**
 * Fonction pour gérer la pression sur une touche avec filtrage optionnel pour les caractères numériques.
 * @param {object} e - L'événement de pression sur la touche.
 * @param {boolean} isNumeric - Indique si seule l'entrée numérique est autorisée.
 */
export function handleKeyPress(e, isNumeric) {
  const charCode = e.which ? e.which : e.keyCode;
  if (isNumeric) {
    if ((charCode == !46 && charCode < 48) || charCode > 57) {
      e.preventDefault();
    }
  }
}
