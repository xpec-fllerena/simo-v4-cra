// OOM
export const get_data_table_orders = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((order: any) => ({
    id: order?.id,
    channel: order?.channel,
    currentStatus: order?.currentStatus?.tag,
    shippingType: order?.shippingType,
  }))
}

export const get_data_table_sgs = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((sg: any) => ({
    id: sg?.id,
    channel: sg?.channel,
    orderId: sg?.orderId,
    currentStatus: sg?.currentStatus?.tag,
    shippingType: sg?.shippingType,
  }))
}

// OLM
export const get_data_table_sources = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((source: any) => ({
    id: source?.id,
    name: source?.name,
    storePickup: JSON.stringify(source?.storePickup),
  }))
}

export const get_data_table_couriers = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((courier: any) => ({
    id: courier?.id,
    name: courier?.name,
    alias: courier?.alias,
    shippingType: courier?.shippingType,
  }))
}

export const get_data_table_locations = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((location: any) => ({
    id: location?.id,
    criteria0: location?.criteria0,
    criteria1: location?.criteria1,
    criteria2: location?.criteria2,
    criteria3: location?.criteria3,
  }))
}

export const get_data_table_routes = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((route: any) => ({
    id: route?.id,
    status: JSON.stringify(route?.status),
  }))
}

export const get_data_table_coverages = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((coverage: any) => ({
    id: coverage?.id,
    courierId: coverage?.courierId,
    routeId: coverage?.routeId,
  }))
}

export const get_data_table_schedules = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((schedule: any) => ({
    id: schedule?.id,
    type: schedule?.type,
    deliveryType: schedule?.deliveryType,
  }))
}

export const get_data_table_capacity = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((capacity: any) => ({
    id: capacity?.id,
    type: capacity?.type,
    date: capacity?.date,
  }))
}

// OIM
export const get_data_table_channels = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((channel: any) => ({
    id: channel?.id,
    name: channel?.name,
  }))
}

export const get_data_table_stock = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((stock: any) => ({
    id: stock?.id,
    name: stock?.name,
  }))
}

export const get_data_table_items = (data: any) => {
  if (!Boolean(data)) return []
  return data.map((item: any) => ({
    sku: item?.sku,
    name: item?.name,
    storePickup: JSON.stringify(item?.storePickup),
  }))
}
