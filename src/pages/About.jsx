import InlineCode from "../components/markdown/InlineCode";
import Section from "../components/markdown/Section";

function About() {
  return (
    <Section id="about" title="about">
      <div className="flex flex-wrap gap-2 text-xs">
        <InlineCode className="bg-[#f0883e]/25 text-[#f2cc60]">AWS (learning)</InlineCode>
        <InlineCode className="bg-[#3fb950]/20 text-[#56d364]">DSA (Java)</InlineCode>
        <InlineCode className="bg-[#a371f7]/20 text-[#d2a8ff]">Leaves of Autumn</InlineCode>
        <InlineCode className="bg-[#58a6ff]/20 text-[#79c0ff]">Software Engineer</InlineCode>
      </div>
      <ul className="md-list space-y-3 text-[#c9d1d9]">
        <li>full-stack developer working with <InlineCode>React</InlineCode>, <InlineCode>TypeScript</InlineCode>, <InlineCode>FastAPI</InlineCode>, <InlineCode>PostgreSQL</InlineCode>, and <InlineCode>AWS</InlineCode></li>
        <li>
          writing a poetry collection - <InlineCode>Leaves of Autumn</InlineCode> (manuscript in progress)
        </li>
        <li>
          learning AWS fundamentals and preparing for <InlineCode>AWS Developer Associate (DVA-C02)</InlineCode>
        </li>
        <li>
          long-term goal: build scalable products combining strong engineering and thoughtful user experience
        </li>
      </ul>
    </Section>
  );
}

export default About;
