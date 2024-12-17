import Image from "apps/website/components/Image.tsx";
import TableTitle from "site/components/ui/TableTitle.tsx";

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
          <TableTitle text={"mais"} />
        </tr>
        <tr className="border-b border-gray3 border-opacity-20 py-1">
          <td>17/10/2024</td>
          <td>123456789</td>
          <td>Descarregar</td>
          <td>Nestlé</td>
          <td>Reginaldo Correa</td>
          <td>157.062.001-98</td>
          <td>
            <Image
              src={"moreIcon.png"}
              width=""
              className="w-4 h-4 cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
