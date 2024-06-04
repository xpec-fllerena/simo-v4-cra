
import { AppContext } from "store/context/AppContext";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";
import OrdersFilter from "./Orders";

interface IFilters {
  className?: string;
}

const Filters = ({ className }: IFilters) => {
  const { open_table_filters, set_open_table_filters } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    set_open_table_filters(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handle_filters = useCallback(
    () => set_open_table_filters(!open_table_filters),
    [open_table_filters, set_open_table_filters]
  );

  return createPortal(
    <div className="absolute top-0 left-0 w-full h-screen overflow-x-hidden">
      <div
        className={cn(
          "absolute w-96 h-full top-0 right-0 flex flex-col items-start justify-start shadow-lg text-black bg-white z-40 transition-all",
          {
            "translate-x-96": !open_table_filters,
            "lg:translate-x-96": !open_table_filters,
          },
          className
        )}
      >
        <div className="w-full flex flex-row justify-between items-center p-4">
          <h4 className="text-xl font-semibold">Filtros</h4>
          <IoIosCloseCircle
            onClick={handle_filters}
            className="text-2xl text-red-600 cursor-pointer rounded-full"
          />
        </div>
        <OrdersFilter />
      </div>
    </div>,
    document?.body
  );
};

export default Filters;
