import Button from "../islands/Button.tsx";
import FilterComponent from "../islands/FilterComponent.tsx";
import Table from "site/islands/Table.tsx";
import PageTitle from "site/components/PageTitle.tsx";

interface VisitsPageProps {
  title: string;
}

export default function VisitsPage(
  { title }: VisitsPageProps,
) {
  return (
    <div className="px-6 pt-11 flex flex-col w-full">
      <PageTitle text={title} />
      <FilterComponent />
      <Table />
      <Button
        text={"Nova Visita"}
        icon={"plusIcon.png"}
        link={"nova_visita"}
        target={"_self"}
        color={"green3"}
      />
    </div>
  );
}
