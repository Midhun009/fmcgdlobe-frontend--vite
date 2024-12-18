import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/categories/";

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch item details by slug
export const fetchItemDetails = async (slug) => {
  if (!slug) {
    console.error("Slug is required for fetching item details.");
    throw new Error("Slug is required");
  }

  try {
    const url = `${API_BASE_URL}${slug}/`; // Construct API URL
    console.log(`Fetching item details from: ${url}`); // Log the URL to verify it's correct
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for slug: ${slug}`, error);
    throw error;
  }
};
