export const registerUser = async (data) => {
  const response = await fetch(
    "http://localhost:5001/api/register", 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Request failed");
  }

  return result;
};
