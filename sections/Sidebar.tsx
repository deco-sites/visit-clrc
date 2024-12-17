import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import SideBarIsland from "site/islands/SidebarIsland.tsx";
import { FnContext } from "@deco/deco";

interface Image {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

/** @titleBy text */
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

export default function SideBar({ sidebarInfos, pathname }: SideBarInfoProps) {
  return <SideBarIsland sidebarInfos={sidebarInfos} pathname={pathname} />;
}

export const loader = (
  props: SideBarInfoProps,
  req: Request,
  _ctx: FnContext,
) => {
  const pathname = new URL(req.url).pathname;

  return {
    ...props,
    pathname,
  };
};
