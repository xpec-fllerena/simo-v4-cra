const aRule = {
  receptionTime: {
    from: "",
    to: "",
    daysOfWeek: [],
  },
  deliveryTime: {
    offset: {
      value: "",
      unit: "",
    },
    fixedHour: "",
    label: "",
  },
}

const schedule_values = {
  id: "",
  type: "",
  deliveryType: "",
  shippingType: [],
  datesToReturn: "",
  status: true,
  enableTime: {
    from: "",
    to: "",
  },
  slots: [
    {
      from: "",
      to: "",
      label: "",
    },
  ],
  rules: [aRule],
  sourceDefaultSettings: {
    leadtime: {
      value: "",
      unit: "",
    },
    crossdock: {
      value: "",
      unit: "",
    },
    workingSessions: [
      {
        from: "",
        to: "",
        productType: "",
        enable_locktime: false,
        lockTime: {
          from: "",
          to: "",
        },
      },
    ],
    workingTime: {
      from: "",
      to: "",
    },
  },
}

export default schedule_values
