function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold text-slate-900">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="project1.jpg" className="w-full h-48 object-cover" alt="Project 1" />
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">Project One</h5>
              <p className="text-gray-600 mb-4">Short description of the project.</p>
              <a href="#" className="inline-block rounded bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-slate-700">
                View Project
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="project2.jpg" className="w-full h-48 object-cover" alt="Project 2" />
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">Project Two</h5>
              <p className="text-gray-600 mb-4">Short description of the project.</p>
              <a href="#" className="inline-block rounded bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-slate-700">
                View Project
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="project3.jpg" className="w-full h-48 object-cover" alt="Project 3" />
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">Project Three</h5>
              <p className="text-gray-600 mb-4">Short description of the project.</p>
              <a href="#" className="inline-block rounded bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-slate-700">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
