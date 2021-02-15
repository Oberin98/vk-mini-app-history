import React from "react";
import { View } from "@vkontakte/vkui";
import { useSelector } from "react-redux";

import BasketPanel from "../panels/BasketPanel";
import CheckoutPanel from "../panels/CheckoutPanel";
import StockCard from "../panels/StockCard";
import StockPanel from "../panels/StockPanel";

import * as constants from "../../utils/constants";

const CheckoutView = (props) => {
  const history = useSelector((state) => state.history.checkoutHistory);

  console.log(history);

  return (
    <View
      id={props.id}
      history={history}
      activePanel={history[history.length - 1]}
    >
      <BasketPanel id={constants.BASKET_PANEL} />
      <CheckoutPanel id={constants.CHECKOUT_PANEL} />
      <StockPanel id={constants.STOCK_PANEL} />
      <StockCard id={constants.STOCK_CARD_PANEL} />
    </View>
  );
};

export default CheckoutView;
