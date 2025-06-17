// src/App.js
import "./index.css";
import { useState } from "react";
import Landing from "./Images/Landing";
import Login from "./Images/Login";
import Signup from "./Images/Signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [users, setusers] = useState([
    { username: "Shiva", password: "123" },
    { username: "Kowsi", password: "123" },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setusers={setusers} />} />
        <Route
          path="/signup"
          element={<Signup users={users} setusers={setusers} />}
        />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
