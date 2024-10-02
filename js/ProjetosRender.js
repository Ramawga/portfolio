const projetos = [
    {
        nome: "Gestão de Clientes Fullstack",
        descricao: "Uma aplicação fullstack para gerenciamento de clientes, utilizando React no front-end, Node.js e MongoDB no back-end.",
        img: "./imagens/gestaoclientes.jpeg",
        link: "https://github.com/Ramawga/ApiClientes"
    },
    {
        nome: "Calculadora De IMC",
        descricao: "Apresento minha Calculadora de IMC, desenvolvida para facilitar o cálculo do Índice de Massa Corporal de forma rápida e prática! O projeto foi construído utilizando as principais tecnologias do front-end: HTML, CSS e Typescript.",
        img: "./imagens/imc.png",
        link: "https://github.com/Ramawga/Calculadora_imc"
    },
    {
        nome: "Calculadora Digital",
        descricao: "Desenvolvi esta calculadora digital utilizando HTML, CSS e JavaScript. O projeto simula uma calculadora funcional, permitindo realizar operações básicas de forma prática e intuitiva, com um design limpo e responsivo. Ideal para reforçar conceitos de manipulação de DOM e interatividade em páginas web.",
        img: "./imagens/calculadora.png",
        link: "https://github.com/Ramawga/Calculadora"
    },
]

const projetosDinamico = document.getElementById("projetosDinamicos");

function gerarProjetos() {
    const projetosHTML = projetos.map(projeto => {
      return `
        <div class="box-projeto">
            <img src="${projeto.img}" alt="${projeto.nome}">
          <h2>${projeto.nome}</h2>
          <p>${projeto.descricao}</p>
          <a target="_blank" href="${projeto.link}"><i class="fa-brands fa-github"></i></a>
        </div>
      `;
    }).join(''); //join('') para remover as vírgulas entre os elementos gerados
    projetosDinamico.innerHTML = projetosHTML;
  }
  
  gerarProjetos();
  