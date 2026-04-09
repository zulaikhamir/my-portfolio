import { ChevronRight } from "lucide-react";
import { Separator } from "../components/ui/separator";

function Experience() {
  const companies = ["Google", "Pinterest", "Amazon", "Wattpad"];
  const points = [
    "Built and launched large-scale ML-driven conversion autobidding models affecting millions of users.",
    "Led end-to-end model development from data and training to production launch for high impact systems.",
  ];

  return (
    <section id="experience" className="py-16">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-4xl font-semibold text-slate-100">/ experience</h2>
        <Separator className="max-w-xs bg-slate-700" />
      </div>
      <div className="grid gap-8 md:grid-cols-[170px_1fr]">
        <div className="space-y-2 border-l border-cyan-400/60 pl-4 md:border-l-0 md:border-r md:border-slate-800 md:pl-0 md:pr-4">
          {companies.map((company, idx) => (
            <button
              key={company}
              className={`w-full py-2 text-left text-sm uppercase tracking-wide ${
                idx === 0 ? "text-cyan-300" : "text-slate-400"
              }`}
            >
              {company}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-4xl font-semibold text-slate-100">
            Software Engineer @ <span className="text-cyan-300">Google</span>
          </h3>
          <p className="mt-2 text-base uppercase tracking-wider text-slate-400">Jan 2025 - Present</p>
          <div className="mt-8 space-y-5">
            {points.map((point) => (
              <div key={point} className="flex gap-3 text-lg leading-8 text-slate-300">
                <ChevronRight size={20} className="mt-1 shrink-0 text-cyan-300" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
