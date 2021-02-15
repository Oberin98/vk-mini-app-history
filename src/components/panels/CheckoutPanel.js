import React from "react";
import { Panel, Button, Title, Div } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import * as constants from "../../utils/constants";
import { setPanel } from "../../store/history/actions";

const CheckoutPanel = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel id={props.id}>
      <Div>
        <Title>CHECKOUT PANEL</Title>
      </Div>
      <Div>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "checkoutHistory",
                panel: constants.BASKET_PANEL,
              })
            )
          }
        >
          ORDER PANEL
        </Button>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "checkoutHistory",
                panel: constants.STOCK_PANEL,
              })
            )
          }
        >
          STOCK PANEL
        </Button>
      </Div>
    </Panel>
  );
};

export default CheckoutPanel;
