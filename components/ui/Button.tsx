import Image from "apps/website/components/Image.tsx";

interface ButtonProps {
  text: string;
  icon?: string;
  link?: string;
  target?: string;
  functionToExecute?: () => void;
}

export default function Button(
  { text, icon, link, target, functionToExecute }: ButtonProps,
) {
  const content = (
    <span className="flex items-center justify-center gap-2">
      {icon && <Image src={icon} width="" />}
      {text}
    </span>
  );

  if (link) {
    return (
      <a
        href={link}
        className="flex items-center justify-center bg-green3 rounded-lg text-white py-2 px-6 w-fit"
        target={target} // Abre em nova aba (opcional)
        rel="noopener noreferrer" // Para segurança adicional
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={functionToExecute}
      className="flex items-center justify-center bg-green3 rounded-lg text-white py-2 px-6 w-fit"
    >
      {content}
    </button>
  );
}
