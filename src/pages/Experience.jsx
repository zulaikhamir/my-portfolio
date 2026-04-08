function Experience() {
  return (
    <section id="experience" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-semibold text-slate-900">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
            <p className="mb-2 text-slate-700">Company Name | 2023 - Present</p>
            <p className="text-gray-600">
              Developed responsive web applications using React and modern CSS frameworks. 
              Collaborated with cross-functional teams to deliver high-quality user experiences.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Developer Intern</h3>
            <p className="mb-2 text-slate-700">Tech Company | 2022 - 2023</p>
            <p className="text-gray-600">
              Assisted in the development of client websites and gained experience in 
              modern web technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
