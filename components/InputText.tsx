import Image from "apps/website/components/Image.tsx";

interface InputTextProps {
  label: string;
  id: string;
  placeholder?: string;
  icon?: string;
}

export default function InputText(
  { label, id, icon, placeholder }: InputTextProps,
) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-black">{label}</label>
      <div className="relative flex items-center">
        {icon && (
          <Image
            src={icon}
            alt={"User Icon"}
            width=""
            className="absolute left-3 w-3 h-3"
          />
        )}
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-full pl-4 pr-3 py-2 bg-white2 rounded-lg focus:outline-none placeholder:text-black"
        />
      </div>
    </div>
  );
}
