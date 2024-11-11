// insightDetailApi.js
export const fetchInsightBySlug = async (slug) => {
  const response = await fetch(`http://127.0.0.1:8000/api/insights/${slug}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
