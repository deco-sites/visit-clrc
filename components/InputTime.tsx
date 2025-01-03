interface InputTimeProps {
  label: string;
  id: string;
  value?: string; // Agora é opcional
}

export default function InputTime({ label, id, value }: InputTimeProps) {
  // Define a data atual no formato "YYYY-MM-DD"
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-black">{label}</label>
      <div className="relative flex items-center">
        <input
          type="time"
          id={id}
          name={id}
          value={value || today} // Usa o valor passado ou o dia atual como padrão
          className="w-full pl-4 pr-3 py-2 bg-white2 rounded-lg focus:outline-none placeholder:text-black"
        />
      </div>
    </div>
  );
}
