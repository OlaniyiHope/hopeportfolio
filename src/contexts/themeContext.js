import React, { createContext, useState, useContext } from "react";


// Create the Theme Context
const ThemeContext = createContext();

// Define Light Theme Colors
const lightTheme = {
  background: "#FFFFFF", // Main screen background
  text: "#000000", // Default text color
  card: "#f5f5f5", // Card and container backgrounds
  inputBackground: "#F0F0F0", // Input field background
  border: "#E0E0E0", // Border color
  modal: "#FFFFFF", // Modal background
  placeholderText: "#888888", // Placeholder text color
  iconColor: "#000000", // Icon color
  shadow: "rgba(0, 0, 0, 0.1)", // Shadow color for iOS/elevation Android
  success: "#000",
  oppositeBackground: "#000",
  oppBackText: "#000",
  nonOpp: "#fff"
};

// Define Dark Theme Colors
const darkTheme = {
  background: "#000000",
  text: "#FFFFFF",
  card: "#121212",
  inputBackground: "#1E1E1E",
  border: "#333333",
  modal: "#1A1A1A",
  placeholderText: "#AAAAAA",
  iconColor: "#FFFFFF",
  shadow: "rgba(255, 255, 255, 0.1)",
  error: "#f00",
  oppositeBackground: "#fff",
  oppBackText: "#fff",
   nonOpp: "#000"
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Choose theme based on darkMode state
  const themeColors = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
