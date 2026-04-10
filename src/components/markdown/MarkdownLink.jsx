import { cn } from "../../lib/utils";

function MarkdownLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={cn(
        "text-[#58a6ff] underline-offset-2 transition-colors duration-150 ease-in hover:underline hover:text-[#79c0ff]",
        className,
      )}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default MarkdownLink;
