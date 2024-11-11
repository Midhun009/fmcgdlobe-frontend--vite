
export const fetchUpdatesData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/insights/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch updates failed:", error);
    throw error;
  }
};
