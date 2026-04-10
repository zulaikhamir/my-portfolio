import { cn } from "../../lib/utils";

const toneStyles = {
  shipped: "text-[#3fb950]",
  "in-progress": "text-[#d29922]",
  default: "text-[#8b949e]",
};

function Badge({ tone = "default", children, className }) {
  return (
    <span className={cn("text-sm", toneStyles[tone] ?? toneStyles.default, className)}>
      {children}
    </span>
  );
}

export default Badge;
