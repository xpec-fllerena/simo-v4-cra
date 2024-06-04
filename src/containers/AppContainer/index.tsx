import PublicRouter from "router/PublicRouter";
import { PublicProvider } from "store/context/PublicContext";
import AppProvider from "store/providers/AppProvider";
import { Flowbite } from "flowbite-react";
import get_flowbite_theme from "utils/get_flowbite_theme/base";
import "assets/css/global.css";

const AppContainer = () => {
  return (
    <Flowbite theme={{ theme: get_flowbite_theme }}>
      <PublicProvider>
        <AppProvider>
          <PublicRouter />
        </AppProvider>
      </PublicProvider>
    </Flowbite>
  );
};

export default AppContainer;
