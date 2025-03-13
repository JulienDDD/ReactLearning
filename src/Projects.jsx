
const projects = [
    { title: "Site E-commerce", description: "Un site de vente en ligne", image: "https://via.placeholder.com/300" },
    { title: "Blog Personnel", description: "Un blog moderne et optimisé", image: "https://via.placeholder.com/300" },
  ];
  
  function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <h2 className="text-3xl text-center font-bold">Mes Projets</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  