import MarkdownLink from "./markdown/MarkdownLink";

function Footer() {
  return (
    <div>
      <div className="border-t border-[#21262d] pt-6 text-center text-sm text-[#8b949e]">
        <MarkdownLink href="https://github.com/zulaikhamir">github</MarkdownLink>
        <span className="px-2">·</span>
        <MarkdownLink href="https://www.linkedin.com/in/zulaikhaashiq/">linkedin</MarkdownLink>
        <span className="px-2">·</span>
        <MarkdownLink href="mailto:zulaikhamir786@gmail.com">writing</MarkdownLink>
        <p className="mt-3 text-xs text-[#6e7681]">made with curiosity, by zulaikha ashiq </p>
      </div>
    </div>
  );
}

export default Footer;
