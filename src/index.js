// src/index.js
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // ✅ Now correctly importing

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
