import axios from "axios";

const API_ENDPOINT = "http://127.0.0.1:8000/api/categories/all/";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
