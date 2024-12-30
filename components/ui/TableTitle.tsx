interface TableTitleProps {
  text: string;
  style?: string;
}

export default function TableTitle({ text, style }: TableTitleProps) {
  return (
    <td className={`uppercase text-gray2 ${style ? style : ""}`}>{text}</td>
  );
}
