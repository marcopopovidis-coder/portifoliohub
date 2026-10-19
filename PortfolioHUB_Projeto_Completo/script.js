const projects = [
  {title:"PortfolioHUB", category:"Web", description:"Interface centralizada para apresentar projetos e compartilhar links do GitHub.", tech:"HTML · CSS · JS", type:"code", url:"https://github.com/marcopopovidis-coder/portifoliohub"},
  {title:"Análise de dados", category:"Dados", description:"Espaço para publicar notebooks, visualizações e resultados de estudos de dados.", tech:"Python · Pandas", type:"shape", url:"https://github.com/marcopopovidis-coder/portifoliohub"},
  {title:"Laboratório web", category:"Estudo", description:"Exercícios e experimentos de HTML, CSS e JavaScript organizados por tema.", tech:"HTML · CSS · JS", type:"code", url:"https://github.com/marcopopovidis-coder/portifoliohub"}
];
const grid = document.querySelector("#projectGrid");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
let activeFilter = "Todos";

function renderProjects() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = projects.filter(project => {
    const matchesCategory = activeFilter === "Todos" || project.category === activeFilter;
    const searchable = `${project.title} ${project.description} ${project.tech} ${project.category}`.toLocaleLowerCase("pt-BR");
    return matchesCategory && searchable.includes(term);
  });
  grid.innerHTML = filtered.map((project, index) => `
    <article class="project-card">
      <div class="project-art" style="--art:${index % 2 ? "#211f35" : "#182b2b"}">
        ${project.type === "code"
          ? `<div class="art-code">&lt;project/&gt;<br>git commit -m "build"<br>deploy: ready_</div>`
          : `<div class="art-shape"></div>`}
      </div>
      <div class="project-body">
        <span class="tag">${project.category} / ${project.tech}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Abrir referência <span>↗</span></a>
      </div>
    </article>`).join("");
  emptyState.hidden = filtered.length !== 0;
}
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
    renderProjects();
  });
});
searchInput.addEventListener("input", renderProjects);
renderProjects();
