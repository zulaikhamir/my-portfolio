import { cn } from "../../lib/utils";

function MarkdownList({ items, className }) {
  return (
    <ul className={cn("md-list space-y-2 text-[#c9d1d9]", className)}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default MarkdownList;
