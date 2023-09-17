import { BASE_URI } from "../constants";

const getSearchForm = async (where, arrival, departure) => {
  const response = await fetch(BASE_URI + "/all");
  if (response.ok) {
    const dataChairs = await response.json();

    if (!where && !arrival && !departure) return [];
    const hasWhere =
      where.length >= 1
        ? dataChairs.filter((data) =>
            data.country.toUpperCase().includes(where.toUpperCase())
          )
        : dataChairs;
    const hasArrival = arrival
      ? hasWhere.filter(
          (data) => data.start_date.toString() === arrival.toString()
        )
      : hasWhere;
    const hasDeparture = departure
      ? hasArrival.filter(
          (data) => data.end_date.toString() === departure.toString()
        )
      : hasArrival;

    return hasDeparture;
  } else {
    const errorMessage = response.text();
    return new Error(errorMessage);
  }
};
export default getSearchForm;
