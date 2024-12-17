interface PageTitleProps {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  return <span className="text-xl font-semibold mb-12">{text}</span>;
}
