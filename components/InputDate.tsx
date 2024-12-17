import Image from "apps/website/components/Image.tsx";

export default function InputDate() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-black">De:</label>
      <div className="relative flex items-center">
        <input
          type="date"
          id="email"
          name="email"
          placeholder="usuario@mail.com"
          className="w-full pl-4 pr-3 py-2 bg-white2 rounded-lg focus:outline-none placeholder:text-black"
        />
      </div>
    </div>
  );
}
