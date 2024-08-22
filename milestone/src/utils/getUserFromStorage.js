export const getUserFromStorage = () => {
  const user = localStorage.getItem("authToken");
  return user || null;
};
