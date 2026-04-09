import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

function About() {
  const skills = ["Python", "TypeScript", "React.js", "Java", "JavaScript", "C#"];

  return (
    <section id="about" className="py-16">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-4xl font-semibold text-slate-100">/ about me</h2>
        <Separator className="max-w-xs bg-slate-700" />
      </div>
      <div className="grid items-start gap-10 md:grid-cols-[1fr_340px]">
        <div>
          <p className="text-lg leading-9 text-slate-300">
            I am currently a <span className="font-semibold text-slate-100">Software Engineer</span> focused on
            building scalable and user-friendly products. I enjoy creating features end-to-end,
            from polished UI to robust app logic, and collaborating across teams to ship real impact.
          </p>
          <p className="mt-6 text-lg leading-9 text-slate-400">
            Here are some technologies I have been working with:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
          <p className="mt-8 text-lg leading-9 text-slate-400">
            Outside of work, I explore design systems, read literary fiction, and build side
            projects that sharpen both product thinking and engineering craft.
          </p>
        </div>
        <img
          src="https://picsum.photos/500/560?random=22"
          alt="About section profile placeholder"
          className="h-auto w-full rounded-xl border border-slate-800 object-cover"
        />
      </div>
    </section>
  );
}

export default About;
