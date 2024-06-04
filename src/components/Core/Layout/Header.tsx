
import { AppContext } from "store/context/AppContext";
import PublicContext from "store/context/PublicContext";
import { useCallback, useContext } from "react";
import cn from "classnames";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";

import logo_omnix_white from "assets/img/logo_omnix_white.svg";
import { Popover } from "components/Core";
import useLogin from "hooks/useLogin";

interface IHeader {
  className?: string;
}

const Header = ({ className }: IHeader) => {
  const { user: current_user } = useContext(PublicContext);
  const { open_sidebar, set_open_sidebar } = useContext(AppContext);
  const { logout_user_action } = useLogin();

  const handle_sidebar = useCallback(() => {
    set_open_sidebar(!open_sidebar);
  }, [open_sidebar, set_open_sidebar]);

  return (
    <div
      className={cn(
        "w-full h-auto flex flex-row items-center justify-between py-4 px-6 lg:px-12 bg-[#F9004D]",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-row justify-center items-center gap-6 lg:gap-10",
          {
            "lg:flex-row-reverse": !open_sidebar,
          }
        )}
      >
        <a href="/dashboard">
          <img src={logo_omnix_white} alt="logo" />
        </a>
        <GiHamburgerMenu
          onClick={handle_sidebar}
          className="text-2xl text-white cursor-pointer"
        />
      </div>
      <div className="flex flex-row gap-6">
        <Popover
          content={
            <div className="w-52 text-center">
              <p>Omnix - XMonitor</p>
            </div>
          }
        >
          <span></span>
          <FaBell className="text-2xl text-white cursor-pointer" />
        </Popover>
        <span className="border-l-2 border-l-white"></span>
        <Popover
          content={
            <div className="w-72 h-auto flex flex-col justify-center items-center gap-4 py-3 px-6">
              <div className="w-full flex flex-col gap-1 text-left pb-4">
                <h4 className="text-xl font-semibold text-black capitalize">
                  {current_user?.name}
                </h4>
                <p className="text-sm text-[#A9A9A9]">
                  Perfil: {current_user?.role}
                </p>
              </div>
              <div className="w-full flex flex-col gap-1 items-start justify-center">
                <a
                  href="/"
                  className="flex flex-row items-center justify-start gap-2 text-black hover:text-[#F9004D]"
                >
                  <MdModeEditOutline className="text-lg" />
                  <p className="text-md">Editar Perfil</p>
                </a>
                <button
                  onClick={logout_user_action}
                  className="flex flex-row items-center justify-start gap-2 text-black hover:text-[#F9004D]"
                >
                  <TbLogout className="text-lg" />
                  <p className="text-md">Cerrar Sesión</p>
                </button>
              </div>
            </div>
          }
        >
          <span></span>
          <FaUserCircle className="text-2xl text-white cursor-pointer" />
        </Popover>
      </div>
    </div>
  );
};

export default Header;
