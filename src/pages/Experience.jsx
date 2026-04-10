import Badge from "../components/markdown/Badge";
import InlineCode from "../components/markdown/InlineCode";
import Section from "../components/markdown/Section";

function Experience() {
  const stackRows = [
    { area: "frontend", tools: ["React 18", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS", "Vite", "React Router", "Axios"], status: "active" },
    { area: "backend", tools: ["FastAPI", "Python", "SQLAlchemy", "Alembic", "REST API design", "APScheduler"], status: "active" },
    { area: "database", tools: ["PostgreSQL"], status: "active" },
    { area: "cloud", tools: ["AWS S3 (presigned URLs)", "AWS EC2", "AWS IAM", "AWS Cognito", "AWS SNS"], status: "active" },
    { area: "tools", tools: ["Git", "GitHub", "GitHub Actions", "Postman", "VS Code"], status: "active" },
    { area: "learning", tools: ["Data Structures & Algorithms (Java)", "System Design fundamentals", "AWS Developer Associate (DVA-C02)"], status: "studying" },
  ];

  const experiencePoints = [
    "Built full-stack applications using React, TypeScript, FastAPI, and PostgreSQL",
    "Integrated 30+ REST APIs using a centralized Axios client",
    "Implemented JWT authentication and role-based access control (RBAC)",
    "Designed backend services using SQLAlchemy, Alembic, and APScheduler",
    "Integrated AWS S3 presigned URLs and EC2-based workflows",
  ];

  return (
    <div className="space-y-14">
      <Section id="stack" title="stack">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#21262d] text-[#f0f6fc]">
                <th className="py-3 pr-4 font-semibold">area</th>
                <th className="py-3 pr-4 font-semibold">tools</th>
                <th className="py-3 font-semibold">status</th>
              </tr>
            </thead>
            <tbody>
              {stackRows.map((row) => (
                <tr key={row.area} className="border-b border-[#21262d]">
                  <td className="py-3 pr-4 text-[#c9d1d9]">{row.area}</td>
                  <td className="py-3 pr-4">
                    <div className="flex flex-wrap gap-2">
                      {row.tools.map((tool) => (
                        <InlineCode key={tool}>{tool}</InlineCode>
                      ))}
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="text-sm text-[#8b949e]">
                      <span
                        className={`mr-1 inline-block h-2 w-2 rounded-full ${
                          row.status === "active"
                            ? "bg-[#3fb950]"
                            : row.status === "studying"
                              ? "bg-[#d29922]"
                              : "bg-[#a371f7]"
                        }`}
                      />
                      <Badge tone={row.status === "active" ? "shipped" : row.status === "studying" ? "in-progress" : "default"}>
                        {row.status}
                      </Badge>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="experience" title="experience">
        <div className="border-l border-[#30363d] pl-4">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#f0f6fc]">Software Engineer</h3>
              <p className="text-[#58a6ff]">JIT Global Infosystems</p>
            </div>
            <p className="text-sm text-[#8b949e]">Sep 2024 - Present</p>
          </div>
          <ul className="md-list space-y-2 text-[#c9d1d9]">
            {experiencePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}

export default Experience;
