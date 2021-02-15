import React from "react";
import { Panel, Button, Div, Title } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import * as constants from "../../utils/constants";
import { setPanel } from "../../store/history/actions";

const BasketPanel = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel id={props.id}>
      <Div>
        <Title>BASKET PANEL</Title>
      </Div>
      <Div>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "checkoutHistory",
                panel: constants.CHECKOUT_PANEL,
              })
            )
          }
        >
          TO CHECKOUT PANEL
        </Button>
      </Div>
    </Panel>
  );
};

export default BasketPanel;
