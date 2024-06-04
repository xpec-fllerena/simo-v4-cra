const source_values = {
  id: "",
  type: "",
  physicalLink: "",
  name: "",
  safety: "",
  storePickup: false,
  location: [
    {
      key: "",
      type: "string",
      value: "",
    },
  ],
  custom: [
    {
      key: "",
      type: "string",
      value: "",
    },
  ],
  enabled: false,
  contact: { name: "", phone: "" },
  ranking: "",
  aliases: "",
  volumeCapacity: [
    {
      daysOfWeek: [],
      capacity: "",
      overCapacity: 0,
    },
  ],
  dispatchCapacity: [
    {
      daysOfWeek: [],
      productType: "",
      capacity: "",
      deliveryType: "",
      overCapacity: 0,
    },
  ],
  schedule: [
    {
      deliveryType: "",
      shippingType: [],
      productType: "",
      leadtime: {
        unit: "",
        value: "",
      },
      slots: [
        {
          from: "",
          to: "",
          label: "",
        },
      ],
    },
  ],
  crossdock: [
    {
      productType: "",
      value: "",
      unit: "",
    },
  ],
  workingSessions: [
    {
      daysOfWeek: [],
      productType: "",
      capacity: "",
      from: "",
      to: "",
      lockTime: {
        from: "",
        to: "",
      },
    },
  ],
  workingTime: [
    {
      daysOfWeek: [],
      from: "",
      to: "",
    },
  ],
  calendarSettings: {
    timezone: "",
    nonWorkingDays: [],
    nonWorkingDates: [],
  },
}

export default source_values
