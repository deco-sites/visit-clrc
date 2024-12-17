import Image from "apps/website/components/Image.tsx";

interface ButtonProps {
  text: string;
  icon: string;
}

export default function Button({ text, icon }: ButtonProps) {
  return (
    <button className="flex items-center justify-center gap-1 bg-green3 rounded-lg text-white py-2 px-6 w-fit">
      <Image src={icon} width="" />
      {text}
    </button>
  );
}
