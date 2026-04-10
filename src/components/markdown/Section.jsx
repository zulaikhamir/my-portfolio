import MarkdownHeading from "./MarkdownHeading";

function Section({ id, title, children, level = 2 }) {
  return (
    <section id={id} className="space-y-4">
      <MarkdownHeading level={level}>{title}</MarkdownHeading>
      <div className="border-t border-[#21262d] pt-5">{children}</div>
    </section>
  );
}

export default Section;
