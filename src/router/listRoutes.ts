/* eslint-disable */
// Bulk
import BulkScreenMainScreen from "screens/BulkScreen/MainScreen";

// Bussiness
import BusinessScreenMainScreen from "screens/BusinessScreen/MainScreen";

// Capacity
import CapacityScreenListScreen from "screens/CapacityScreen/ListScreen";
import CapacityScreenNewScreen from "screens/CapacityScreen/NewScreen";

// Channels
import ChannelsScreenListScreen from "screens/ChannelsScreen/ListScreen";
import ChannelsScreenNewScreen from "screens/ChannelsScreen/NewScreen";

// Couriers
import CouriersScreenListScreen from "screens/CouriersScreen/ListScreen";
import CouriersScreenDetailScreen from "screens/CouriersScreen/DetailScreen";
import CouriersScreenNewScreen from "screens/CouriersScreen/NewScreen";

// Coverages
import CoveragesScreenListScreen from "screens/CoveragesScreen/ListScreen";
import CoveragesScreenDetailScreen from "screens/CoveragesScreen/DetailScreen";
import CoveragesScreenNewScreen from "screens/CoveragesScreen/NewScreen";

// Items
import ItemsScreenListScreen from "screens/ItemsScreen/ListScreen";
import ItemsScreenDetailScreen from "screens/ItemsScreen/DetailScreen";
import ItemsScreenNewScreen from "screens/ItemsScreen/NewScreen";

// Locations
import LocationsScreenListScreen from "screens/LocationsScreen/ListScreen";
import LocationsScreenNewScreen from "screens/LocationsScreen/NewScreen";

// Orders
import OrdersScreenListScreen from "screens/OrdersScreen/ListScreen";
import OrdersScreenDetailScreen from "screens/OrdersScreen/DetailScreen";
import OrdersScreenNewScreen from "screens/OrdersScreen/NewScreen";

// Reports
import ReportsScreenMainScreen from "screens/ReportsScreen/MainScreen";

// Routes
import RoutesScreenListScreen from "screens/RoutesScreen/ListScreen";
import RoutesScreenDetailScreen from "screens/RoutesScreen/DetailScreen";
import RoutesScreenNewScreen from "screens/RoutesScreen/NewScreen";

// Schedule
import ScheduleScreenListScreen from "screens/ScheduleScreen/ListScreen";
import ScheduleScreenDetailScreen from "screens/ScheduleScreen/DetailScreen";
import ScheduleScreenNewScreen from "screens/ScheduleScreen/NewScreen";

// Settings
import SettingsScreenMainScreen from "screens/SettingsScreen/MainScreen";
import SettingsScreenSafetyScreen from "screens/SettingsScreen/SafetyScreen";

// Sgs
import SgsScreenListScreen from "screens/SgsScreen/ListScreen";
import SgsScreenDetailScreen from "screens/SgsScreen/DetailScreen";

// Sources
import SourcesScreenListScreen from "screens/SourcesScreen/ListScreen";
import SourcesScreenDetailScreen from "screens/SourcesScreen/DetailScreen";
import SourcesScreenNewScreen from "screens/SourcesScreen/NewScreen";
import SourcesScreenEditScreen from "screens/SourcesScreen/EditScreen";

// Stock
import StockScreenListScreen from "screens/StockScreen/ListScreen";
import StockScreenDetailScreen from "screens/StockScreen/DetailScreen";
import StockScreenNewScreen from "screens/StockScreen/NewScreen";

// Dashboard
import HomeScreen from "screens/HomeScreen/HomeScreen";

const listRoutes = [
  // BulkScreen
  {
    name: "BulkScreenMainScreen",
    path: "bulk",
    element: BulkScreenMainScreen,
  },
  // CapacityScreen
  {
    name: "CapacityScreenListScreen",
    path: "capacity",
    element: CapacityScreenListScreen,
  },
  {
    name: "CapacityScreenNewScreen",
    path: "capacity/new",
    element: CapacityScreenNewScreen,
  },
  // ChannelsScreen
  {
    name: "ChannelsScreenListScreen",
    path: "channels",
    element: ChannelsScreenListScreen,
  },
  {
    name: "ChannelsScreenNewScreen",
    path: "channels/new",
    element: ChannelsScreenNewScreen,
  },
  // CouriersScreen
  {
    name: "CouriersScreenListScreen",
    path: "couriers",
    element: CouriersScreenListScreen,
  },
  {
    name: "CouriersScreenDetailScreen",
    path: "couriers/:courier_id",
    element: CouriersScreenDetailScreen,
  },
  {
    name: "CouriersScreenNewScreen",
    path: "couriers/new",
    element: CouriersScreenNewScreen,
  },
  // CoveragesScreen
  {
    name: "CoveragesScreenListScreen",
    path: "coverages",
    element: CoveragesScreenListScreen,
  },
  {
    name: "CoveragesScreenDetailScreen",
    path: "coverages/:coverage_id",
    element: CoveragesScreenDetailScreen,
  },
  {
    name: "CoveragesScreenNewScreen",
    path: "coverages/new",
    element: CoveragesScreenNewScreen,
  },
  // ItemsScreen
  {
    name: "ItemsScreenListScreen",
    path: "items",
    element: ItemsScreenListScreen,
  },
  {
    name: "ItemsScreenDetailScreen",
    path: "items/:item_id",
    element: ItemsScreenDetailScreen,
  },
  {
    name: "ItemsScreenNewScreen",
    path: "items/new",
    element: ItemsScreenNewScreen,
  },
  // LocationsScreen
  {
    name: "LocationsScreenListScreen",
    path: "locations",
    element: LocationsScreenListScreen,
  },
  {
    name: "LocationsScreenNewScreen",
    path: "locations/new",
    element: LocationsScreenNewScreen,
  },
  // OrdersScreen
  {
    name: "OrdersScreenListScreen",
    path: "orders",
    element: OrdersScreenListScreen,
  },
  {
    name: "OrdersScreenDetailScreen",
    path: "orders/:order_id",
    element: OrdersScreenDetailScreen,
  },
  {
    name: "OrdersScreenNewScreen",
    path: "orders/new",
    element: OrdersScreenNewScreen,
  },
  // ReportsScreen
  {
    name: "ReportsScreenMainScreen",
    path: "reports",
    element: ReportsScreenMainScreen,
  },
  // RoutesScreen
  {
    name: "RoutesScreenListScreen",
    path: "routes",
    element: RoutesScreenListScreen,
  },
  {
    name: "RoutesScreenDetailScreen",
    path: "routes/:route_id",
    element: RoutesScreenDetailScreen,
  },
  {
    name: "RoutesScreenNewScreen",
    path: "routes/new",
    element: RoutesScreenNewScreen,
  },
  // ScheduleScreen
  {
    name: "ScheduleScreenListScreen",
    path: "schedule",
    element: ScheduleScreenListScreen,
  },
  {
    name: "ScheduleScreenDetailScreen",
    path: "schedule/:schedule_id",
    element: ScheduleScreenDetailScreen,
  },
  {
    name: "ScheduleScreenNewScreen",
    path: "schedule/new",
    element: ScheduleScreenNewScreen,
  },
  // SettingsScreen
  {
    name: "SettingsScreenMainScreen",
    path: "settings",
    element: SettingsScreenMainScreen,
  },
  {
    name: "SettingsScreenSafetyScreen",
    path: "settings/safety",
    element: SettingsScreenSafetyScreen,
  },
  // SgsScreen
  {
    name: "SgsScreenListScreen",
    path: "sgs",
    element: SgsScreenListScreen,
  },
  {
    name: "SgsScreenDetailScreen",
    path: "sgs/:sg_id",
    element: SgsScreenDetailScreen,
  },
  // SourcesScreen
  {
    name: "SourcesScreenListScreen",
    path: "sources",
    element: SourcesScreenListScreen,
  },
  {
    name: "SourcesScreenDetailScreen",
    path: "sources/:source_id",
    element: SourcesScreenDetailScreen,
  },
  {
    name: "SourcesScreenEditScreen",
    path: "sources/:source_id/edit",
    element: SourcesScreenEditScreen,
  },
  {
    name: "SourcesScreenNewScreen",
    path: "sources/new",
    element: SourcesScreenNewScreen,
  },
  // StockScreen
  {
    name: "StockScreenListScreen",
    path: "stock",
    element: StockScreenListScreen,
  },
  {
    name: "StockScreenDetailScreen",
    path: "stock/:stock_id",
    element: StockScreenDetailScreen,
  },
  {
    name: "StockScreenNewScreen",
    path: "stock/new",
    element: StockScreenNewScreen,
  },
  // BusinessScreen
  {
    name: "BusinessScreenMainScreen",
    path: "bussiness",
    element: BusinessScreenMainScreen,
  },
  // Dashboard
  {
    name: "HomeScreen",
    path: "dashboard",
    element: HomeScreen,
  },
];

export default listRoutes;
