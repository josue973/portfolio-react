import React from "react";

function ProjectsSection({ projects }) {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>Ver no GitHub</a>
        </article>
      ))}
    </section>
  );
}

export default ProjectsSection;
