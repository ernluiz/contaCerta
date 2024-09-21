// src/App.tsx
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from './pages/home';
import Sobre from './pages/sobre';
import Dashboard from "./pages/dashboard";
import Navbar from './components/Navbar/Navbar';
import Login from "./pages/login";
import { TransactionProvider } from "./context/TransactionContext";
import { useEffect } from "react";
import { ThemeProvider, useThemeContext } from "./components/themes/ThemeContext";

function RedirectToLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return null;
}

function App() {
  return (
    <TransactionProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </TransactionProvider>
  );
}

const Main: React.FC = () => {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<RedirectToLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
