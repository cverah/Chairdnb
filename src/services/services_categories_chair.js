import { BASE_URI } from "../constants";

const getCategoriesChair = async (category) => {
  const response = await fetch(BASE_URI + category);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorMessage = response.text();
    return new Error(errorMessage);
  }
};

export default getCategoriesChair;
