import Image from "apps/website/components/Image.tsx";
import InputText from "site/components/InputText.tsx";
import Button from "site/islands/Button.tsx";
import TableTitle from "site/components/ui/TableTitle.tsx";

interface SearchVisitantModalContentProps {
  setNewVisitantModalOpen: (value: boolean) => void;
  setSearchVisitantModalOpen: (value: boolean) => void;
}

export default function SearchVisitantModalContent(
  { setNewVisitantModalOpen, setSearchVisitantModalOpen }:
    SearchVisitantModalContentProps,
) {
  return (
    <div className="flex flex-col gap-6 w-[500px]">
      <div className="flex justify-between items-center">
        <span className="text-xl">Pesquisar Visitante</span>
        <Image
          src={"/closeIcon.png"}
          alt="Close Icon"
          className="cursor-pointer"
          width=""
          onClick={() => {
            setSearchVisitantModalOpen(false);
            setNewVisitantModalOpen(true);
          }}
        />
      </div>

      <InputText label={"Nome"} id={"nome"} />
      <InputText label={"CPF"} id={"cpf"} />
      <InputText label={"RG"} id={"rg"} />
      <div className="w-full flex justify-end py-6">
        <Button text={"Pesquisar"} color={"green3"} />
      </div>

      <div className="flex flex-col items-center border-y border-gray3 border-opacity-20 py-6">
        <span>Nenhum resultado encontrado</span>
        <div className="w-full my-8">
          <table className="w-full">
            <tr>
              <TableTitle text={"nome"} />
              <TableTitle text={"cpf"} />
              <TableTitle text={"rg"} />
              <td></td>
            </tr>

            <tr>
              <td>Paulo do Carmo</td>
              <td>158.152.345-12</td>
              <td>262123-1</td>
              <td className="flex justify-end">
                <Button text={"Selecionar"} color={"gray"} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
