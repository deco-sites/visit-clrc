import Image from "apps/website/components/Image.tsx";
import InputText from "site/components/InputText.tsx";
import InputDate from "site/components/InputDate.tsx";
import InputSelect from "site/components/InputSelect.tsx";
import { useState } from "preact/hooks";

export default function FilterComponent() {
  const [rotatedIcon, setRotatedIcon] = useState(false);

  const handleExpand = () => {
    console.log("Expandiu");
    setRotatedIcon(!rotatedIcon);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-green1 rounded-xl p-8 w-full flex flex-col shadow-xl">
        <div className="flex justify-between items-end">
          <div className="flex gap-4">
            <InputDate />
            <InputDate />
            <InputSelect />
            <InputSelect />
          </div>
          <div className="flex items-center gap-4">
            <button
              className="flex items-center justify-center bg-white3 rounded-full w-8 h-8"
              onClick={handleExpand}
            >
              <Image
                src={"double-arrow.png"}
                width=""
                className={`transform transition-transform duration-300 ${
                  rotatedIcon ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <button className="flex items-center justify-center gap-1 bg-green2 rounded-lg text-white py-2 px-6">
              <Image src={"filter.png"} width="" />
              Filtrar
            </button>
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            rotatedIcon ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="mt-4">
            <InputText label={"Teste"} />
          </div>
        </div>
      </div>
      <span className="text-gray2 text-sm mb-8">
        <strong>3</strong> visitas encontradas
      </span>
    </div>
  );
}
