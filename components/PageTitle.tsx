interface PageTitleProps {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  return <span className="text-xl text-black2 font-semibold mb-12">{text}
  </span>;
}
