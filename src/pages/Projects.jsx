import { Folder, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

function Projects() {
  const projects = [
    { title: "Task Planner", stack: "React / Tailwind", desc: "A clean kanban-style task manager with drag-and-drop and tags." },
    { title: "Weather Lens", stack: "JS / API", desc: "Weather dashboard with saved cities, charts, and location-based forecasts." },
    { title: "Habit Loop", stack: "React / Firebase", desc: "Habit tracker with streaks, reminders, and lightweight progress analytics." },
    { title: "Blog Studio", stack: "Next.js", desc: "Markdown publishing platform with editor preview and content search." },
    { title: "Expense Snap", stack: "React Native", desc: "Mobile expense tracker with category budgets and monthly summaries." },
    { title: "Movie Finder", stack: "TypeScript", desc: "Search-first movie explorer with watchlist persistence and filters." },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-4xl font-semibold text-slate-100">/ pet projects</h2>
        <Separator className="max-w-xs bg-slate-700" />
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-800">
        <img
          src="https://picsum.photos/1100/430?random=39"
          className="h-auto w-full object-cover"
          alt="Featured project placeholder"
        />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="transition-colors hover:border-cyan-400/40">
            <CardHeader>
              <div className="mb-3 flex items-center justify-between">
                <Folder size={18} className="text-cyan-300" />
                <Github size={15} className="text-slate-500" />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.stack}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-slate-400">{project.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
