import React from "react";
import { ConfigProvider, AppRoot, Epic } from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import "@vkontakte/vkui/dist/vkui.css";

import CatalogView from "./components/views/CatalogView";
import CheckoutView from "./components/views/CheckoutView";
import InitView from "./components/views/InitView";
import OrderView from "./components/views/OrderView";

import Tabbar from "./components/shared/Tabbar";

import * as constants from "./utils/constants";

const App = () => {
  const { view } = useSelector((state) => state.history);

  return (
    <ConfigProvider>
      <AppRoot>
        <Epic activeStory={view} tabbar={<Tabbar />}>
          <CheckoutView id={constants.CHECKOUT_VIEW} />
          <CatalogView id={constants.CATALOG_VIEW} />
          <OrderView id={constants.ORDER_VIEW} />
          <InitView id={constants.INIT_VIEW} />
        </Epic>
      </AppRoot>
    </ConfigProvider>
  );
};

export default App;
