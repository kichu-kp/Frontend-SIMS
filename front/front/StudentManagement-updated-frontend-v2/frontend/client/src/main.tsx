import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// src/main.tsx or App.tsx
import "./styles/globals.css"; // new


createRoot(document.getElementById("root")!).render(<App />);
