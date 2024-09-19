import React from "react";
import "./styles.css";
import Imagem1 from "../../@assets/luiz-fernando.jpg";
import Imagem2 from "../../@assets//img1.jpg";
import Imagem3 from "../../@assets/img2.jpg";
import Imagem4 from "../../@assets/img3.png";

const Sobre = () => {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao meu portfólio</h1>
            <p>
                Sou formado em automação industrial com 9 anos de experiência na área, atuando na integração de sistemas e otimização de processos. Atualmente, estou cursando o sexto período de engenharia de software, o que me permite unir o conhecimento prático da indústria com o desenvolvimento de soluções tecnológicas.
            </p>

            <h2>Sobre Mim</h2>
            <div className="image-gallery">
                <img src={Imagem1} alt="Imagem de projeto de automação" className="gallery-image" />
            </div>
            <p>
                Minha carreira começou na área de automação industrial, onde aprendi a importância da eficiência e da precisão no controle de sistemas complexos. Com o tempo, desenvolvi um interesse crescente pelo desenvolvimento de software, o que me levou a iniciar minha graduação em engenharia de software. Hoje, combino as habilidades práticas da automação com a programação para criar soluções robustas e inteligentes que atendem a diferentes setores.
            </p>

            <h2>Minhas Especialidades</h2>
            <div className="highlights">
                <div className="highlight-item">
                    <h3>Automação Industrial</h3>
                    <p>
                        Tenho vasta experiência em automação de processos industriais, integrando sistemas e otimizando operações para aumentar a produtividade e reduzir custos. Atuei com CLPs, redes industriais e sistemas SCADA.
                    </p>
                </div>
                <div className="highlight-item">
                    <h3>Desenvolvimento de Software</h3>
                    <p>
                        Atualmente, estou aprofundando meus conhecimentos em engenharia de software, com foco no desenvolvimento de sistemas escaláveis e eficientes. Estou familiarizado com diversas linguagens de programação, frameworks e metodologias ágeis.
                    </p>
                </div>
                <div className="highlight-item">
                    <h3>Integração entre Hardware e Software</h3>
                    <p>
                        Minha formação em automação industrial me permite integrar soluções de software com dispositivos e sistemas de hardware, criando soluções completas que melhoram a operação e o controle de processos.
                    </p>
                </div>
            </div>

            <h2>Minha Visão</h2>
            <p>
                Acredito que a fusão entre automação industrial e engenharia de software é o futuro para muitas indústrias. Meu objetivo é continuar desenvolvendo soluções que não apenas automatizam processos, mas que também sejam inteligentes, escaláveis e conectadas com as mais recentes inovações tecnológicas.
            </p>

            <h2>Galeria de Projetos</h2>
            <div className="image-gallery">
                <img src={Imagem2} alt="Imagem de projeto de software" className="gallery-image" />
                <img src={Imagem4} alt="Imagem de projeto de integração" className="gallery-image" />
                <img src={Imagem3} alt="Imagem de projeto de integração" className="gallery-image" />

            </div>

            <h2>Informações Adicionais</h2>
            <p>
                Estou sempre em busca de novas oportunidades para aplicar meus conhecimentos e contribuir para projetos que envolvam tanto a automação quanto o desenvolvimento de software. Se você está procurando um profissional com experiência prática e teórica nessas áreas, não hesite em entrar em contato.
            </p>
        </div>
    );
};

export default Sobre;
