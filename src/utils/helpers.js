export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDate = (inputDate) => {
  const [year, month, day] = inputDate.split('-');

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};
