import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./pages/SidebarProvider";
import { AuthProvider } from "./contexts/JWTAuthContext";
import { ThemeProvider } from "./contexts/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <AuthProvider>
          <ThemeProvider>
    <App />

          </ThemeProvider>
    
      </AuthProvider>
    </SidebarProvider>
  </React.StrictMode>
);
