import { cn } from "../../lib/utils";

function MarkdownHeading({ level = 2, id, children, className }) {
  const Tag = level === 1 ? "h1" : "h2";

  return (
    <Tag
      id={id}
      className={cn(
        level === 1
          ? "md-h1 text-3xl font-bold tracking-tight text-[#c9d1d9] md:text-4xl"
          : "md-h2 text-2xl font-bold tracking-tight text-[#c9d1d9]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default MarkdownHeading;
