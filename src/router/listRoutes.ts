import BulkScreenMainScreen from "screens/BulkScreen/MainScreen";

import BusinessScreenMainScreen from "screens/BusinessScreen/MainScreen";

import HomeScreen from "screens/HomeScreen/HomeScreen"

const listRoutes = [
  {
    name: "BulkScreenMainScreen",
    path: "bulk",
    element: BulkScreenMainScreen,
  },
  // BusinessScreen
  {
    name: "BusinessScreenMainScreen",
    path: "bussiness",
    element: BusinessScreenMainScreen,
  },
  {
    name: "HomeScreen",
    path: "dashboard",
    element: HomeScreen,
  },
];

export default listRoutes;
