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

// Componente que lida com o redirecionamento
function RedirectToLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona para /login se o caminho for a raiz "/"
    navigate("/login");
  }, [navigate]);

  return null; // Não precisa renderizar nada, apenas redirecionar
}

function App() {
  return (
      <TransactionProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              {/* Adiciona o redirecionamento da raiz "/" */}
              <Route path="/" element={<RedirectToLogin />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </Router>
      </TransactionProvider>
  );
}

export default App;
