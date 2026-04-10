import Badge from "../components/markdown/Badge";
import InlineCode from "../components/markdown/InlineCode";
import MarkdownLink from "../components/markdown/MarkdownLink";
import Section from "../components/markdown/Section";

function Projects() {
  const projects = [
    {
      title: "jit-ios • shipped",
      href: "https://github.com/zulaikhamir",
      desc: "Full-stack HR operations platform managing employee lifecycle workflows including onboarding, assets, leaves, tasks, invoices, and document access with secure authentication.",
      status: "shipped",
      tags: [
        { label: "React", className: "bg-[#58a6ff]/20 text-[#79c0ff]" },
        { label: "TypeScript", className: "bg-[#6f42c1]/20 text-[#d2a8ff]" },
        { label: "FastAPI", className: "bg-[#3fb950]/20 text-[#56d364]" },
        { label: "PostgreSQL", className: "bg-[#1f6feb]/20 text-[#58a6ff]" },
        { label: "AWS", className: "bg-[#f0883e]/20 text-[#ffa657]" },
        { label: "SQLAlchemy", className: "bg-[#8957e5]/20 text-[#d2a8ff]" },
        { label: "Alembic", className: "bg-[#a371f7]/20 text-[#d2a8ff]" },
      ],
    },
    {
      title: "rid • shipped",
      href: "https://github.com/zulaikhamir",
      desc: "Role-based infrastructure workflow platform for configuring AWS resources with approval flows, secure credential validation, and real-time status tracking via REST APIs.",
      status: "shipped",
      tags: [
        { label: "React", className: "bg-[#58a6ff]/20 text-[#79c0ff]" },
        { label: "TypeScript", className: "bg-[#6f42c1]/20 text-[#d2a8ff]" },
        { label: "Tailwind", className: "bg-[#2ea043]/20 text-[#56d364]" },
        { label: "REST API", className: "bg-[#3fb950]/20 text-[#56d364]" },
        { label: "AWS", className: "bg-[#f0883e]/20 text-[#ffa657]" },
        { label: "EC2", className: "bg-[#f85149]/20 text-[#ff7b72]" },
      ],
    },
    {
      title: "portfolio • active",
      href: "https://github.com/zulaikhamir",
      desc: "Responsive developer portfolio built with reusable React components to present projects, technical stack, and writing direction in a structured UI.",
      status: "active",
      tags: [
        { label: "React", className: "bg-[#58a6ff]/20 text-[#79c0ff]" },
        { label: "TypeScript", className: "bg-[#6f42c1]/20 text-[#d2a8ff]" },
        { label: "Tailwind", className: "bg-[#2ea043]/20 text-[#56d364]" },
        { label: "Framer Motion", className: "bg-[#a371f7]/20 text-[#d2a8ff]" },
        { label: "React Router", className: "bg-[#3fb950]/20 text-[#56d364]" },
      ],
    },
  ];

  const focusLines = [
    { indent: 0, type: "brace", key: "{", value: "" },
    { indent: 1, type: "pair", key: '"sprint"', value: '"90-day focus",'},
    { indent: 1, type: "array-start", key: '"priorities"', value: "[" },
    { indent: 2, type: "array-item", key: "", value: '"clear AWS DVA-C02 certification",' },
    { indent: 2, type: "array-item", key: "", value: '"solve 200+ DSA problems (arrays -> graphs)",' },
    { indent: 2, type: "array-item", key: "", value: '"ship aws-study-tracker v1.0",' },
    { indent: 2, type: "array-item", key: "", value: '"finish \'Fall\' novel draft"' },
    { indent: 1, type: "array-end", key: "]", value: "," },
    { indent: 1, type: "object-start", key: '"daily"', value: "{" },
    { indent: 2, type: "pair", key: '"morning"', value: '"DSA practice (2 problems)",' },
    { indent: 2, type: "pair", key: '"afternoon"', value: '"build / work at JIT",' },
    { indent: 2, type: "pair", key: '"evening"', value: '"AWS study + writing"' },
    { indent: 1, type: "object-end", key: "}", value: "," },
    { indent: 1, type: "pair", key: '"status"', value: '"locked in"' },
    { indent: 0, type: "brace", key: "}", value: "" },
  ];

  const statusStyle = {
    shipped: { dot: "bg-[#2ea043]", tone: "shipped", label: "shipped" },
    active: { dot: "bg-[#d29922]", tone: "in-progress", label: "active" },
    "in progress": { dot: "bg-[#f0883e]", tone: "in-progress", label: "in progress" },
  };

  return (
    <div className="space-y-14">
      <Section id="projects" title="projects">
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => {
            const currentStatus = statusStyle[project.status] ?? statusStyle.active;
            return (
              <article
                key={project.title}
                className="flex h-full flex-col gap-4 rounded-lg border border-[#30363d] bg-[#111827]/50 p-4 shadow-[0_0_0_1px_rgba(240,246,252,0.03)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="max-w-[85%] text-base font-semibold leading-snug text-[#e6edf3]">
                    <MarkdownLink href={project.href}>{project.title}</MarkdownLink>
                  </h3>
                  <span className="flex shrink-0 items-center gap-1.5 text-xs text-[#8b949e]">
                    <span className={`inline-block h-2 w-2 rounded-full ${currentStatus.dot}`} />
                    <Badge tone={currentStatus.tone} className="text-xs">
                      {currentStatus.label}
                    </Badge>
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#8b949e]">{project.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <InlineCode key={tag.label} className={`text-xs ${tag.className}`}>
                      {tag.label}
                    </InlineCode>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="current-focus" title="current focus">
        <article className="overflow-hidden rounded-lg border border-[#30363d] bg-[#0d1117] shadow-[0_0_0_1px_rgba(240,246,252,0.03)]">
          <header className="flex items-center justify-between border-b border-[#21262d] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <p className="text-xs text-[#6e7681]">focus.json</p>
            <span className="w-12" />
          </header>

          <div className="px-4 py-4 md:px-6">
            <div className="space-y-1 font-mono text-sm leading-7">
              {focusLines.map((line, index) => (
                <p key={`focus-line-${index}`} className="flex gap-4">
                  <span className="w-6 select-none text-right text-[#6e7681]">{index + 1}</span>
                  <span className="text-[#c9d1d9]">
                    <span style={{ paddingLeft: `${line.indent * 1.25}rem` }} className="inline-block">
                      {(line.type === "pair" || line.type === "array-start" || line.type === "object-start") && (
                        <>
                          <span className="text-[#79c0ff]">{line.key}</span>
                          <span className="text-[#c9d1d9]">: </span>
                          <span className="text-[#a5d6ff]">{line.value}</span>
                        </>
                      )}
                      {line.type === "array-item" && <span className="text-[#56d364]">{line.value}</span>}
                      {(line.type === "brace" || line.type === "array-end" || line.type === "object-end") && (
                        <>
                          <span className="text-[#c9d1d9]">{line.key}</span>
                          <span className="text-[#c9d1d9]">{line.value}</span>
                        </>
                      )}
                    </span>
                  </span>
                </p>
              ))}
            </div>
          </div>
        </article>
      </Section>
    </div>
  );
}

export default Projects;
