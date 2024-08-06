export const dateNow = (): string => {
  const dates = new Date();

  const date = dates.getDate() < 10 ? "0" + dates.getDate() : dates.getDate();
  const month =
    dates.getMonth() < 10 ? "0" + dates.getMonth() : dates.getMonth();
  const year = dates.getFullYear();

  return `${year}-${month}-${date}`;
};
