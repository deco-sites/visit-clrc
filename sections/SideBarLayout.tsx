import { type Section } from "@deco/deco/blocks";

interface SideBarLayoutProps {
  sections: Section[];
}
export default function SideBarLayout(
  { sections }: SideBarLayoutProps,
) {
  return (
    <div className="grid grid-cols-[256px_1fr] relative h-screen">
      {sections.map((section, index) => (
        <section.Component key={index} {...section.props} />
      ))}
    </div>
  );
}
