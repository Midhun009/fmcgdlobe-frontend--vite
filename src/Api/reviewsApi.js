// reviewsApi.js
export const fetchReviewsData = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/testimonials/"); // Replace with your actual API endpoint
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  const data = await response.json();
  return data; // Assuming data is an array of review objects
};
