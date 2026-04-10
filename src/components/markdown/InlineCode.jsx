import { cn } from "../../lib/utils";

function InlineCode({ children, className }) {
  return (
    <code className={cn("rounded bg-[#161b22] px-1 text-[#f0883e]", className)}>
      {children}
    </code>
  );
}

export default InlineCode;
