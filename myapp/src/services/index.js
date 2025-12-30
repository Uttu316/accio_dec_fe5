export const api = async ({ endpoint }) => {
  const BASE_URL = "https://fakestoreapi.com";

  try {
    const res = await fetch(BASE_URL + endpoint);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error");
    throw err;
  }
};
