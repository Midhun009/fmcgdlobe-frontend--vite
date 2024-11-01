// api/pricingApi.js

export const fetchPricingData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/package/");
    if (!response.ok) {
      throw new Error("Failed to fetch pricing data");
    }
    const data = await response.json();

    // Map the data to match your component's requirements
    return data.map((item) => ({
      id: item.id, // Include ID if needed for the key prop
      name: item.name, // Use 'name' from your API
      price: item.price, // Use 'price' from your API
      features: item.features, // Directly use features
      section: item.section, // Add section if needed
    }));
  } catch (error) {
    console.error("Error fetching pricing data:", error);
    throw error;
  }
};
