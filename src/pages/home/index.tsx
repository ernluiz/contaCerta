import React from "react";
import "./styles.css";


const Home = () => {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao Conta Certa</h1>
            <p>
                Estamos empenhados em oferecer as melhores soluções tecnológicas para o seu negócio.
                Com anos de experiência e uma equipe dedicada, estamos prontos para transformar suas ideias em realidade.
            </p>
            <div className="highlights">

                <div className="highlight-item">

                    <h2>Como Funciona o Lançamento de Receitas e Despesas</h2>
                    <p>
                        No Conta Certa, o lançamento de receitas e despesas é simples e intuitivo. Você pode registrar
                        transações diretamente através da interface do sistema. Aqui estão os passos:
                    </p>
                    <ol>
                        <li>
                            <strong>Acesse a página de lançamentos:</strong> Navegue até a seção de lançamentos de receitas e despesas.
                        </li>
                        <li>
                            <strong>Preencha os detalhes da transação:</strong> Insira uma descrição da transação, informe o valor e selecione o tipo (receita ou despesa).
                        </li>
                        <li>
                            <strong>Salvar a transação:</strong> Após preencher os dados, clique no botão de salvar. A transação será registrada e aparecerá na lista.
                        </li>
                        <li>
                            <strong>Visualize suas transações:</strong> Todas as transações lançadas serão exibidas em uma lista, permitindo fácil acompanhamento e gerenciamento.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Home;
