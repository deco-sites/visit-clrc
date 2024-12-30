import Image from "apps/website/components/Image.tsx";
import { useRef, useState } from "preact/hooks";
import TableModal from "site/components/TableModal.tsx";

interface TableCelProps {
  type: "text" | "icon";
  style?: string;
  data?: string;
  icon?: string;
}

export default function TableCel({ type, style, data, icon }: TableCelProps) {
  const [opened, setOpened] = useState(false);
  const avatarRef = useRef(null);

  const handleClick = () => {
    setOpened(!opened);
  };

  if (type === "icon") {
    return (
      <>
        <td ref={avatarRef} className={`py-3 relative ${style ? style : ""}`}>
          <Image
            src={icon}
            width=""
            className="w-4 h-4 cursor-pointer"
            onClick={handleClick}
          />
          {opened && <TableModal openerRef={avatarRef} setOpen={setOpened} />}
        </td>
      </>
    );
  }

  return <td className={`py-3 relative ${style ? style : ""}`}>{data}</td>;
}
