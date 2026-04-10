import MarkdownHeading from "../components/markdown/MarkdownHeading";
import InlineCode from "../components/markdown/InlineCode";
import MarkdownLink from "../components/markdown/MarkdownLink";
// import { portraitAscii } from "../content/asciiArt";

function Home() {
  // const poetryLines = [
  //   "i stitched my storms into syllables,",
  //   "and called the ruin home.",
  //   "between logic and longing,",
  //   "i learned that silence also compiles,",
  //   "and the heart still ships unfinished code.",
  // ];

  return (
    <section id="home" className="space-y-7">
      <p className="flex items-center gap-2 text-xs text-[#6e7681]">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2">zulaikha - README.md</span>
      </p>
      <MarkdownHeading level={1}>zulaikha ashiq</MarkdownHeading>
      <div className="border-t border-[#21262d] pt-5">
        <p className="max-w-3xl leading-relaxed text-[#c9d1d9]">
         <span>I am a</span> <span className="font-semibold text-[#f0f6fc]">Software Engineer and writer</span> from Kashmir.
          Building thoughtful, reliable web applications that help teams manage workflows, organize information, and work more efficiently.
          Alongside engineering, working toward publishing <InlineCode>Leaves of Autumn</InlineCode>.
        </p>
      </div>
      <p className="border-l-4 border-[#3fb950] pl-5 leading-relaxed text-[#8b949e]">
        &gt; Some things are easier to express in systems, others in sentences. I work with both.
      </p>

      {/* <div className="rounded-xl border border-[#30363d] p-4">
        <div className="grid gap-5 md:grid-cols-[1.1fr_1fr]">
          <div className="overflow-x-auto">
            <pre className="min-w-max text-[7px] leading-[1.1] tracking-tight text-[#8b949e]">
              {portraitAscii}
            </pre>
          </div>

          <div className="space-y-3 border-l border-[#21262d] pl-4">
            <p className="text-xs uppercase tracking-wide text-[#6e7681]">
              from leaves of autumn
            </p>
            {poetryLines.map((line) => (
              <p key={line} className="text-sm italic leading-relaxed text-[#c9d1d9]">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div> */}

      <p className="text-sm text-[#8b949e]">
        <MarkdownLink href="https://github.com/zulaikhamir">github</MarkdownLink>
        <span className="px-2"> </span>
        <MarkdownLink href="https://www.linkedin.com/in/zulaikhaashiq/">linkedin</MarkdownLink>
        <span className="px-2"> </span>
        <MarkdownLink href="mailto:zulaikhamir786@gmail.com">email</MarkdownLink>
        <span className="px-2"> </span>
        <MarkdownLink href="/my-portfolio/zulaikha-ashiq-resume.pdf" download>resume</MarkdownLink>
      </p>
    </section>
  );
}

export default Home;
