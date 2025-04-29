export const isAuthenticated = (): boolean => {
  return sessionStorage.getItem("authToken") !== null;
};
