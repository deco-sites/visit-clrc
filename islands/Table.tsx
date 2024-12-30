import TableTitle from "site/components/ui/TableTitle.tsx";
import TableRow from "site/components/ui/TableRow.tsx";

export default function Table() {
  return (
    <table className="mb-8">
      <tbody>
        <tr>
          <TableTitle text={"data"} />
          <TableTitle text={"id"} />
          <TableTitle text={"motivo"} />
          <TableTitle text={"empresa"} />
          <TableTitle text={"nome"} />
          <TableTitle text={"cpf"} />
          <TableTitle text={"mais"} style={"text-center"} />
        </tr>
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}
