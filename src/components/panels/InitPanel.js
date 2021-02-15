import React from "react";
import { Panel, Title, Button, Div } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import * as constants from "../../utils/constants";
import { setView } from "../../store/history/actions";

const InitPanel = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel id={props.id}>
      <Div>
        <Title>INIT PANEL</Title>
      </Div>
      <Div>
        <Button onClick={() => dispatch(setView(constants.CATALOG_VIEW))}>
          TO CATALOG
        </Button>
      </Div>
    </Panel>
  );
};

export default InitPanel;
