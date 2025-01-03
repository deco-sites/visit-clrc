import InputText from "site/components/InputText.tsx";
import Button from "../islands/Button.tsx";

interface NewVisitantModalContentProps {
  setNewVisitantModalOpen: (value: boolean) => void;
  setSearchVisitantModalOpen: (value: boolean) => void;
}
export default function NewVisitantModalContent(
  { setNewVisitantModalOpen, setSearchVisitantModalOpen }:
    NewVisitantModalContentProps,
) {
  return (
    <div className="flex flex-col gap-6 w-[500px]">
      <div className="flex items-center justify-between">
        <span className="text-xl">Novo Visitante</span>
        <span
          className="text-sm cursor-pointer"
          onClick={() => {
            setSearchVisitantModalOpen(true);
            setNewVisitantModalOpen(false);
          }}
        >
          Pesquisar Visitante
        </span>
      </div>
      <InputText label={"Nome"} id={"nome"} />
      <InputText label={"CPF"} id={"cpf"} />
      <InputText label={"RG"} id={"rg"} />
      <InputText label={"Placa"} id={"placa"} />
      <InputText label={"E-mail"} id={"email"} />
      <InputText label={"Telefone"} id={"tel"} />
      <div className="flex gap-4 w-full justify-center">
        <Button text={"Salvar"} color={"green3"} />
        <Button
          text={"Cancelar"}
          functionToExecute={() => setNewVisitantModalOpen(false)}
          color={"red"}
        />
      </div>
    </div>
  );
}
