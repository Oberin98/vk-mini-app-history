import React from "react";
import { Panel, Title, Div, Button } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import * as constants from "../../utils/constants";
import { setPanel, filterHistory } from "../../store/history/actions";

const StockPanel = (props) => {
  const dispatch = useDispatch();

  const toCheckoutPanelHandler = () => {
    dispatch(
      setPanel({
        history: "checkoutHistory",
        panel: constants.CHECKOUT_PANEL,
        filters: [constants.STOCK_CARD_PANEL, constants.STOCK_PANEL],
      })
    );
  };

  return (
    <Panel id={props.id}>
      <Div>
        <Title>STOCK PANEL</Title>
      </Div>
      <Div>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "checkoutHistory",
                panel: constants.STOCK_CARD_PANEL,
              })
            )
          }
        >
          STOCK CARD PANEL
        </Button>
        <Button onClick={toCheckoutPanelHandler}>CHECKOUT_PANEL</Button>
      </Div>
    </Panel>
  );
};

export default StockPanel;
