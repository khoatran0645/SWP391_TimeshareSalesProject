import { Icon } from "@iconify/react";
import logo from "../assets/images/TimeShare.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  return (
    <>
      <div className="flex items-center justify-between p-10">
        <div onClick={toggleMenu} className="border p-5 relative">
          <div>
            <Icon icon="material-symbols:menu" />
          </div>

          <div
            className="w-52 px-10 py-5 bg-white hidden border absolute"
            id="menu"
          >
            <Link to={"/"} className="block py-5">
              Trang chủ
            </Link>
            <Link to={"/introduction"} className="block py-5">
              Giới thiệu timeshare
            </Link>
            <Link to={"/more"} className="block py-5">
              Giới thiệu tiện ích
            </Link>
            <Link to={"/detail/S1.112305"} className="block py-5">
              Bán Timeshare
            </Link>
          </div>
        </div>
        <img className="w-2/12" src={logo} />
        <div></div>
      </div>
    </>
  );
};
