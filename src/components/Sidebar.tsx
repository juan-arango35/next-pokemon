import Image from "next/image";
import {
  IoAttachSharp,
  IoBrowsersOutline,
  IoCalculator,
  IoLogoReact,
} from "react-icons/io5";
import SidebarMenuItems from "./SidebarMenuItems";
import { CgPokemon } from "react-icons/cg";
import Link from "next/link";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/profile",
    icon: <IoAttachSharp size={40} />,
    title: "Profile",
    subTitle: "Profile jaz",
  },
  {
    path: "/dashboard/pokemons",
    icon: <CgPokemon size={40} />,
    title: "Pokemons",
    subTitle: "Estaticos",
  },
];

const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <IoLogoReact className="mr-3" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>

        <Link href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="/perfil.jpg"
              alt="Use Avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Juan Arango</span>
        </Link>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItems key={item.path} {...item} />
        ))}
        
      </div>
    </div>
  );
};

export default Sidebar;


