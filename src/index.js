import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { AdaptivityProvider } from "@vkontakte/vkui";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

bridge.send("VKWebAppInit");

ReactDOM.render(
  <Provider store={store}>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </Provider>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./utils/eruda").then(({ default: eruda }) => {}); //runtime download
}
