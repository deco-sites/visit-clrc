import TableCel from "site/components/ui/TableCel.tsx";

export default function TableRow() {
  return (
    <tr className="border-b border-gray3 border-opacity-20 py-1">
      <TableCel type={"text"} data={"17/10/2024"} />
      <TableCel type={"text"} data={"123456789"} />
      <TableCel type={"text"} data={"Descarregar"} />
      <TableCel type={"text"} data={"Nestlé"} />
      <TableCel type={"text"} data={"Reginaldo Correa"} />
      <TableCel type={"text"} data={"157.062.001-98"} />

      <TableCel
        type={"icon"}
        icon={"moreIcon.png"}
        style={"flex justify-center"}
      />
    </tr>
  );
}
