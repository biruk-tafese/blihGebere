import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"; // default export
import { AuthContext } from "./AuthContextInstance";
import { PROFILE } from "../api/index";

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
      return decoded.exp * 1000 > Date.now();
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  };

  const login = async (token) => {
    try {
      localStorage.setItem("authToken", token);
      await fetchUserProfile(token);
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
      setUser({ token, ...data });
    } catch (error) {
      console.error("Error fetching user profile:", error);
      logout();
    }
  };

  // --- Predict function ---
  const predict = async (parameters) => {
    if (!user?.token) {
      throw new Error("User not authenticated");
    }
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", { // <-- FIXED URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(parameters),
      });
      if (!response.ok) {
        throw new Error("Prediction failed");
      }
      return await response.json();
    } catch (error) {
      console.error("Prediction error:", error);
      throw error;
    }
  };
  // --- End Predict function ---

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
        fetchUserProfile(token);
      } catch (error) {
        console.error("Invalid token during effect:", error);
        logout();
      }
    } else {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, predict }}>
      {children}
    </AuthContext.Provider>
  );
};