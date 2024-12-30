import { useRef } from "preact/hooks";
import { useClickOutsideListener } from "site/helpers/hooks/useClickOutsideListener.ts";

export default function TableModal({ openerRef, setOpen }) {
  const dropdownRef = useRef(null);
  useClickOutsideListener(dropdownRef, openerRef, setOpen);

  return (
    <div
      ref={dropdownRef}
      className="flex flex-col absolute mt-8 bg-white2 rounded-xl p-4 z-10"
    >
      <span className="text-center text-sm font-light py-3 border-b border-gray3 border-opacity-20">
        Editar
      </span>
      <span className="text-center text-sm font-light py-3">
        Cancelar Visita
      </span>
    </div>
  );
}
