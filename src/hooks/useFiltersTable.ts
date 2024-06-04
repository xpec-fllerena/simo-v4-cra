
import { AppContext } from "store/context/AppContext";
import { useCallback, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface IUseFiltersTable {
  table_name: string;
}

const useFiltersTable = ({ table_name }: IUseFiltersTable) => {
  const { filters_table, set_filters_table } = useContext(AppContext);
  const selected_path = useLocation();

  useEffect(() => {
    set_filters_table({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected_path]);

  const apply_filter = useCallback(
    (value: any) => {
      let filter_data = filters_table;
      filter_data = Object.assign(filter_data, value);
      set_filters_table(filter_data);
    },
    [filters_table, set_filters_table]
  );

  return {
    table_name,
    filters_table,
    apply_filter,
  };
};

export default useFiltersTable;
