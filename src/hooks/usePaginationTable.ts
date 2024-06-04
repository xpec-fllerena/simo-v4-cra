
import { useState, useCallback, useEffect } from "react"

interface IUsePaginationTable {
  data: any
}

const usePaginationTable = ({ data }: IUsePaginationTable) => {
  const [per_page, set_per_page] = useState<number>(10)
  const [current_page, set_current_page] = useState<number>(0)
  const [total_records, set_total_records] = useState<number>(0)
  const [total_pages, set_total_pages] = useState<number>(0)
  const [current_data, set_current_data] = useState<Array<Array<any>>>([])

  useEffect(() => {
    if (data) {
      set_current_data(data?.records)
      set_total_pages(data?.pages)
      set_total_records(data?.total)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => set_current_page(0), [per_page])

  const handle_page_change = useCallback(
    (new_page: number) => {
      set_current_page(new_page)
    },
    [set_current_page],
  )

  const handle_per_page = useCallback(
    (records_per_page: number) => {
      set_per_page(records_per_page)
      set_current_page(1)
    },
    [set_per_page],
  )

  return {
    current_data,
    current_page,
    total_pages,
    per_page,
    total_records,
    set_current_data,
    handle_per_page,
    handle_page_change,
  }
}

export default usePaginationTable
