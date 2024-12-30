import Image from "apps/website/components/Image.tsx";

interface InputSelectProps {
  label: string;
  id: string;
  options: string[];
}

export default function InputSelect({ label, id, options }: InputSelectProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-black">{label}</label>
      <div className="relative w-full">
        <select
          id={id}
          name={id}
          className="w-full pl-4 pr-10 py-2 bg-white2 rounded-lg focus:outline-none placeholder:text-black appearance-none"
        >
          {options.map((option) => <option>{option}</option>)}
        </select>
        <Image
          src={"down-arrow.png"}
          width=""
          alt="Seta para baixo"
          className="absolute w-3 h-3 right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>
  );
}
