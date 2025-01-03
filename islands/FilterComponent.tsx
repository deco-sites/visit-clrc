import Image from "apps/website/components/Image.tsx";
import InputText from "site/components/InputText.tsx";
import InputDate from "site/components/InputDate.tsx";
import InputSelect from "site/components/InputSelect.tsx";
import { useState } from "preact/hooks";
import Button from "./Button.tsx";

export default function FilterComponent() {
  const [rotatedIcon, setRotatedIcon] = useState(false);

  const handleExpand = () => {
    setRotatedIcon(!rotatedIcon);
  };

  const reasonOptions = ["Carregar", "Descarregar"];
  const companyArr = ["Brastemp", "Nestlé"];
  const typeOptions = ["Comercial", "Padrão"];

  const Imprimir = () => {
    console.log("Imprimiu");
  };

  const Exportar = () => {
    console.log("Exportou");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-green1 rounded-xl p-8 w-full flex flex-col shadow-xl">
        <div className="flex items-end">
          <div className="flex gap-4 w-3/5">
            <InputDate label={"De:"} id={"start_date"} />
            <InputDate label={"Até:"} id={"end_date"} />
            <InputSelect
              label={"Motivo"}
              id={"motivo"}
              options={reasonOptions}
            />
            <InputSelect
              label={"Empresa"}
              id={"empresa"}
              options={companyArr}
            />
          </div>
          <div className="flex items-center gap-4 w-2/5 justify-end">
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
            <Button
              text={"Filtar"}
              icon={"/filter.png"}
              color={"green2"}
            />
            {
              /*
            <button className="flex items-center justify-center gap-1 bg-green2 rounded-lg text-white py-2 px-6">
              <Image src={"filter.png"} width="" />
              Filtrar
            </button>*/
            }
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            rotatedIcon ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="mt-4 flex flex-col gap-4 w-3/5">
            <div className="flex gap-4">
              <InputText label={"Placa:"} id={"placa"} />
              <InputText label={"Nome do Motorista:"} id={"nome"} />
              <InputText label={"CPF do Motorista:"} id={"cpf"} />
              <InputSelect
                label={"Tipo:"}
                id={"tipo"}
                options={typeOptions}
              />
            </div>

            <div className="flex gap-4">
              <Button
                text={"Imprimir"}
                icon={"/printer.png"}
                functionToExecute={Imprimir}
                color={"green2"}
              />
              <Button
                text={"Exportar"}
                icon={"/export.png"}
                functionToExecute={Exportar}
                color={"green2"}
              />
            </div>
          </div>
        </div>
      </div>
      <span className="text-gray2 text-sm mb-8">
        <strong>3</strong> visitas encontradas
      </span>
    </div>
  );
}
