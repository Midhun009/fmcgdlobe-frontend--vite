// newsApi.js
export const fetchLatestNewsData = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/insights/"); // Replace with your actual API endpoint
  if (!response.ok) {
    throw new Error("Failed to fetch news articles");
  }
  const data = await response.json();
  return data; // Assuming data is an array of news objects
};
