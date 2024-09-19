import React, { useState } from "react";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";
import Dashboard from "../../pages/dashboard";
import Login from "../../pages/login";

enum RouterPages {
    login = 'login',
    home = 'home',
    dashboard = 'dashboard',
    sobre = 'sobre'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = useState<RouterPages>(RouterPages.login);

    const renderizarBotoes = () => (
        <div>
            <button onClick={() => setPaginaAtual(RouterPages.login)}>Login</button>
            <button onClick={() => setPaginaAtual(RouterPages.home)}>Home</button>
            <button onClick={() => setPaginaAtual(RouterPages.dashboard)}>Dashboard</button>
            <button onClick={() => setPaginaAtual(RouterPages.sobre)}>Sobre</button>
        </div>
    );

    const renderizarPagina = () => {
        console.log(getPaginaAtual); // Substitua o alert por console.log para evitar interrupções
        switch (getPaginaAtual) {
            case RouterPages.login:
                return <Login />;
            case RouterPages.home:
                return <Home />;
            case RouterPages.dashboard:
                return <Dashboard />;
            case RouterPages.sobre:
                return <Sobre />;
            default:
                return <Login />;
        }
    };

    return (
        <div>
            {renderizarBotoes()}
            {renderizarPagina()}
        </div>
    );
};

export default Router;
