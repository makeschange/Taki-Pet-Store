export const calculateDeliveryDate = (daysToAdd) => {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
