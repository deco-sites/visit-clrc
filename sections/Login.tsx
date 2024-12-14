import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import LoginForm from "../islands/LoginForm.tsx";

interface Logotipo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

interface LoginProps {
  title: string;
  text: string;
  logo: Logotipo;
}

export default function Login({ title, text, logo }: LoginProps) {
  return (
    <div className="w-screen h-screen bg-gray1 flex items-center justify-center py-64">
      <div className="flex rounded-xl h-min">
        <div className="bg-green1 bg-[url('/loginBackground.png')] bg-no-repeat bg-contain rounded-tl-xl rounded-bl-xl py-20 px-12 flex flex-col gap-11 shrink-0 text-white">
          <span className="text-xl font-bold">{title}</span>
          <span>{text}</span>
        </div>
        <div className="bg-white rounded-tr-xl rounded-br-xl p-12 flex flex-col items-center w-96">
          <Image
            src={logo.src}
            width={logo.width ?? 100}
            alt={logo.alt}
            height={logo.height ?? 100}
            className="mb-14"
          />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
