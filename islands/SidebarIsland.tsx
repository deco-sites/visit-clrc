import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

interface sidebarItem {
  icon: Image;
  text: string;
  link: string;
}

interface SidebarProps {
  logo: Image;
  sidebarItems: sidebarItem[];
}

interface SideBarInfoProps {
  sidebarInfos: SidebarProps;
  pathname?: string;
}

export default function SideBarIsland(
  { sidebarInfos, pathname }: SideBarInfoProps,
) {
  return (
    <aside className="fixed top-0 left-0 bg-green1 h-screen flex flex-col items-center">
      <Image
        src={sidebarInfos.logo.src}
        alt={sidebarInfos.logo.alt}
        className="py-12 pb-24"
      />
      <div className="flex flex-col">
        {sidebarInfos.sidebarItems.map((item) => {
          // Normaliza pathname e item.text para comparação
          const normalizedPathname = pathname?.replace(/^\//, "").toLowerCase(); // Remove "/" e converte para minúsculas
          const normalizedText = item.text.toLowerCase(); // Converte para minúsculas

          const isActive = normalizedPathname === normalizedText;

          return (
            <a
              href={item.link}
              className={`flex gap-3 hover:bg-green2 text-white py-4 w-64 pl-10 border-b border-white border-opacity-40 first:border-t ${
                isActive ? "bg-green2" : ""
              }`}
            >
              <Image src={item.icon.src} alt={item.icon.alt} width="" />
              <span>{item.text}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
