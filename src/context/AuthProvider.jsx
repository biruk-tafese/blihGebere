import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"; // Fixed import (no curly braces since it's a default export)
import { AuthContext } from "./AuthContextInstance";
import { PROFILE } from "../api/index"; // Adjust the import path as necessary

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          console.warn("Token has expired");
          localStorage.removeItem("authToken");
          return null;
        }
        return { token, ...decoded };
      } catch (error) {
        console.error("Invalid token during initialization:", error);
        return null;
      }
    }
    return null;
  });

  const isTokenValid = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 > Date.now(); // Check if token is valid
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  };

  const login = async (token) => {
    try {
      localStorage.setItem("authToken", token);
      await fetchUserProfile(token); // Fetch profile details after login
    } catch (error) {
      console.error("Error during login:", error);
      logout();
    }
  };

  const register = (token, full_name, phone_number) => {
    console.log("Register called with:", { token, full_name, phone_number });
    try {
      if (token) {
        localStorage.setItem("authToken", token);
        const decoded = jwtDecode(token);
        setUser({ token, full_name, phone_number, ...decoded });
      } else {
        localStorage.setItem("fullName", full_name);
        localStorage.setItem("phoneNumber", phone_number);
        setUser({ full_name, phone_number });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      logout();
    }
  };

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch(PROFILE.GET_PROFILE, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
      const data = await response.json();
      setUser({ token, ...data }); // Combine token and user details
    } catch (error) {
      console.error("Error fetching user profile:", error);
      logout(); // Clear invalid data if fetching fails
    }
  };

  const logout = () => {
    console.log("Logout called");
    localStorage.removeItem("authToken");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("fullName");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token && isTokenValid(token)) {
      try {
        fetchUserProfile(token); // Fetch the user profile if the token is valid
      } catch (error) {
        console.error("Invalid token during effect:", error);
        logout();
      }
    } else {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};