const courier_values = {
  id: "",
  name: "",
  alias: "",
  shippingType: [],
  deliveryType: "",
  costStrategy: "",
  locationStrategy: "",
  nonWorkingDays: [],
  nonWorkingDates: [],
  workingTime: [
    {
      daysOfWeek: [],
      from: null,
      to: null,
    },
  ],
  channel: [],
  productType: "",
  dispatchCapacity: [
    {
      daysOfWeek: [],
      overCapacity: "",
      capacity: "",
    },
  ],
  volumeCapacity: [
    {
      daysOfWeek: [],
      overCapacity: "",
      capacity: "",
    },
  ],
  criterias: "",
  status: null,
}

export default courier_values
