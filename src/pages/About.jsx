import profilePic from "../assets/duck.jpg"; // Add your image in the assets folder

function About() {
  return (
    <section id="about" className="w-full bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">

        <img
          src={profilePic}
          alt="Zulaikha"
          className="rounded-full mb-4 mx-auto w-[150px] h-[150px] object-cover"
        />
        <h2 className="mb-4 text-3xl font-semibold text-slate-900">Hello.</h2>
        <p className="text-lg leading-relaxed mx-auto max-w-3xl">
          Hi! I'm Zulaikha, a passionate web developer who loves building user-friendly
          and visually appealing websites. I specialize in React, JavaScript, and Tailwind CSS.
          Let's create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;
