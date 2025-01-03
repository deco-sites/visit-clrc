import PageTitle from "site/components/PageTitle.tsx";
import InputSelect from "site/components/InputSelect.tsx";
import InputDate from "site/components/InputDate.tsx";
import InputTime from "site/components/InputTime.tsx";
import Table from "site/islands/Table.tsx";
import Button from "site/islands/Button.tsx";
import Modal from "site/islands/Modal.tsx";
import NewVisitantModalContent from "site/components/NewVisitantModalContent.tsx";
import { useState } from "preact/hooks";
import SearchVisitantModalContent from "site/components/SearchVisitantModalContent.tsx";

export default function VisitPageIsland() {
  const companyArr = ["Brastemp", "Nestlé"];
  const typeOptions = ["Comercial", "Padrão"];

  const [newVisitantModalOpen, setNewVisitantModalOpen] = useState(false);
  const [searchVisitantModalOpen, setSearchVisitantModalOpen] = useState(false);

  return (
    <>
      <div className="px-6 pt-11 flex flex-col w-full">
        <PageTitle text={"Agendar Nova Visita"} />

        <div className="flex flex-col gap-4 w-2/5">
          <InputSelect label={"Empresa"} id={"empresa"} options={companyArr} />
          <InputSelect
            label={"Tipo da Visita"}
            id={"tipo"}
            options={typeOptions}
          />
          <div className="flex gap-4">
            <InputDate label={"Data da Visita"} id={"data"} value={""} />
            <InputTime label={"Período da Visita"} id={"periodo"} value={""} />
          </div>
        </div>
        <h2 className="font-bold text-xl text-black2 mt-10 mb-6">
          Dados dos Visitantes
        </h2>
        <Table />
        <Button
          text={"Adicionar"}
          icon={"plusIcon.png"}
          functionToExecute={() =>
            setNewVisitantModalOpen(!newVisitantModalOpen)}
          color={"green3"}
        />
      </div>
      {newVisitantModalOpen && (
        <Modal
          children={
            <NewVisitantModalContent
              setNewVisitantModalOpen={setNewVisitantModalOpen}
              setSearchVisitantModalOpen={setSearchVisitantModalOpen}
            />
          }
        />
      )}
      {searchVisitantModalOpen && (
        <Modal
          children={
            <SearchVisitantModalContent
              setNewVisitantModalOpen={setNewVisitantModalOpen}
              setSearchVisitantModalOpen={setSearchVisitantModalOpen}
            />
          }
        />
      )}
    </>
  );
}
