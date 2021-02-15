import React from "react";
import { Panel, Title, Div, Button } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import * as constants from "../../utils/constants";
import { setPanel } from "../../store/history/actions";

const ProductCardPanel = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel id={props.id}>
      <Div>
        <Title>PRODUCT CARD PANEL</Title>
      </Div>
      <Div>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "catalogHistory",
                panel: "TEST_PANEL_1",
              })
            )
          }
        >
          TO TEST PANEL 1
        </Button>
      </Div>
    </Panel>
  );
};

export default ProductCardPanel;
