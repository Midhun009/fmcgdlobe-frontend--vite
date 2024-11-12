
export const fetchProducts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/products/"); 
    const data = await response.json();
    return data; // Return the data if the API call is successful
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array in case of error
  }
};
export const fetchProductDetails = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/products/${id}/`); // API for product details based on id
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};

