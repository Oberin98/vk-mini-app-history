import React from "react";
import { Panel, Title, Button, Div } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import * as constants from "../../utils/constants";
import { setPanel } from "../../store/history/actions";

const CatalogPanel = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel id={props.id}>
      <Div>
        <Title>CATALOG PANEL</Title>
      </Div>
      <Div>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "catalogHistory",
                panel: constants.PRODUCT_CARD_PANEL,
              })
            )
          }
        >
          TO PRODUCT CARD
        </Button>
      </Div>
    </Panel>
  );
};

export default CatalogPanel;
