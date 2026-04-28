const projetos = [
  {
    nome: "Gestão de Clientes Fullstack",
    descricao: "Painel para cadastrar, listar e organizar clientes, conectando uma interface em React com API em Node.js e banco MongoDB.",
    img: "./imagens/gestaoclientes.jpeg",
    link: "https://github.com/Ramawga/ApiClientes",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    nome: "Calculadora de IMC",
    descricao: "Experiência simples e direta para calcular IMC, com validação de entrada, resposta imediata e visual pensado para uso rápido.",
    img: "./imagens/imc.png",
    link: "https://github.com/Ramawga/Calculadora_imc",
    tags: ["TypeScript", "HTML", "CSS"]
  },
  {
    nome: "Calculadora Digital",
    descricao: "Calculadora funcional em JavaScript, criada para praticar manipulação de DOM, estados de tela e interações básicas com precisão.",
    img: "./imagens/calculadora.png",
    link: "https://github.com/Ramawga/Calculadora",
    tags: ["JavaScript", "DOM", "UI"]
  }
];

const projetosDinamico = document.getElementById("projetosDinamicos");

function gerarProjetos() {
  const projetosHTML = projetos.map((projeto) => {
    const tags = projeto.tags.map((tag) => `<span>${tag}</span>`).join("");

    return `
      <article class="box-projeto">
        <img src="${projeto.img}" alt="Tela do projeto ${projeto.nome}">
        <div class="project-body">
          <h3>${projeto.nome}</h3>
          <p>${projeto.descricao}</p>
          <div class="project-tags">${tags}</div>
          <a class="project-link" target="_blank" rel="noreferrer" href="${projeto.link}">
            Ver repositório <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </article>
    `;
  }).join("");

  projetosDinamico.innerHTML = projetosHTML;
}

gerarProjetos();
