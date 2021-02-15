import React from "react";
import { View } from "@vkontakte/vkui";

import OrderPanel from "../panels/OrderPanel";

import * as constants from "../../utils/constants";

const OrderView = (props) => {
  return (
    <View id={props.id} activePanel={constants.ORDER_PANEL}>
      <OrderPanel id={constants.ORDER_PANEL} />
    </View>
  );
};

export default OrderView;
