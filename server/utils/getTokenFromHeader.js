export const getTokenFromHeader = (req) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    throw new Error("Token not found");
  }
  return token;
};
