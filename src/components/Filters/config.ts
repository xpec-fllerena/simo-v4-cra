import OrdersFilter from "components/Filters/Orders"

const get_filters_content = (table_name: string) => {
  const filters = {
    orders: OrdersFilter
  }

  // const result = filters.hasOwnProperty(table_name) ? filters?[table_name] : null
  // return result
}

export default get_filters_content