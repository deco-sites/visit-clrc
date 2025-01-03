import { ReactNode } from "preact/compat";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <div className="z-10 w-full h-full bg-black2 opacity-20">
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl py-14 px-11 z-50 opacity-100">
        {children}
      </div>
    </div>
  );
}
