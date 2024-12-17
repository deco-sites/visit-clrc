import Image from "apps/website/components/Image.tsx";

interface InputTextProps {
  label: string;
  icon?: string;
}

export default function InputText({ label, icon }: InputTextProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-black">Usuário</label>
      <div className="relative flex items-center">
        <Image
          src={"userIcon.png"}
          alt={"User Icon"}
          width=""
          className="absolute left-3 w-3 h-3"
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="usuario@mail.com"
          className="w-full pl-10 pr-3 py-2 bg-white2 rounded-lg focus:outline-none placeholder:text-black"
        />
      </div>
    </div>
  );
}
