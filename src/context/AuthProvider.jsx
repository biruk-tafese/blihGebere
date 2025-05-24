import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./AuthContextInstance";
import { PROFILE } from "../api/index";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("authToken");
          return null;
        }
        // Try to restore user_type and other info from localStorage if available
        const storedUser = localStorage.getItem("userInfo");
        if (storedUser) {
          return { token, ...JSON.parse(storedUser) };
        }
        return { token, ...decoded };
      } catch (error) {
        localStorage.removeItem("authToken");
        return null;
      }
    }
    return null;
  });

  const isTokenValid = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  };

  // login now stores user info (including user_type) in localStorage for persistence
 const login = async (token) => {
    try {
      localStorage.setItem("authToken", token);
      const response = await fetch(PROFILE.GET_PROFILE, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch user profile");
      const data = await response.json();
      // Use data.user if your backend returns { user: { ... } }
      const userData = data.user ? data.user : data;
      setUser({ token, ...userData });
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } catch (error) {
      logout();
    }
  };

  const register = (token, full_name, phone_number) => {
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
    } catch {
      logout();
    }
  };

  
  
  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch(PROFILE.GET_PROFILE, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch user profile");
      const data = await response.json();
      const userData = data.user ? data.user : data;
      setUser({ token, ...userData });
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } catch {
      logout();
    }
  };

  const predict = async (parameters) => {
    if (!user?.token) throw new Error("User not authenticated");
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(parameters),
    });
    if (!response.ok) throw new Error("Prediction failed");
    return await response.json();
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("fullName");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token && isTokenValid(token)) {
      fetchUserProfile(token);
    } else {
      logout();
    }
  }, []);

  const fetchOptions = async (token) => {
    const headers = { Authorization: `Bearer ${token}` };
    const cropsRes = await fetch('http://127.0.0.1:5000/crop', { headers });
    const areasRes = await fetch('http://127.0.0.1:5000/area', { headers });
    return {
      crops: await cropsRes.json(),
      areas: await areasRes.json(),
    };
  };

  const downloadReport = async (item, type, token) => {
    let url = '';
    let filename = '';
    if (type === 'pdf') {
      url = 'http://127.0.0.1:5000/predict/download-result-pdf/';
      filename = 'crop_prediction_report.pdf';
    } else if (type === 'csv') {
      url = 'http://127.0.0.1:5000/predict/download-result-csv/';
      filename = 'crop_prediction_report.csv';
    } else if (type === 'excel') {
      url = 'http://127.0.0.1:5000/predict/download-result-excel/';
      filename = 'crop_prediction_report.xlsx';
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Download failed');
    const blob = await res.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  return (
    <AuthContext.Provider value={{
      user, login, register, logout, predict, fetchOptions, downloadReport
    }}>
      {children}
    </AuthContext.Provider>
  );
};