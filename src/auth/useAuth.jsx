import { useState, useEffect } from "react";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Token exists, the user is authenticated
      setAuthenticated(true);
    } else {
      // Token doesn't exist, the user is not authenticated
      setAuthenticated(false);
    }
  }, []);

  return { authenticated };
};
