export function formatDate(dateString) {
  // Créez un objet Date à partir de la chaîne de caractères
  const date = new Date(dateString);

  // Obtenez le jour, le mois et l'année de la date
  const day = date.getDate();
  const month = date.getMonth() + 1; // Notez que les mois commencent à 0
  const year = date.getFullYear();

  // Formatez les parties de la date avec des zéros de remplissage si nécessaire
  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");

  // Créez la chaîne de date formatée
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
}
