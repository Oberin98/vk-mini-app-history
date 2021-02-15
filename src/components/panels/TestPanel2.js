import React from "react";
import { Panel, Title, Div, Button } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import * as constants from "../../utils/constants";
import { setPanel } from "../../store/history/actions";

const TestPanel2 = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel id={props.id}>
      <Div>
        <Title>TEST PANEL 2</Title>
      </Div>
      <Div>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "catalogHistory",
                panel: constants.CATALOG_PANEL,
              })
            )
          }
        >
          TO CATALOG PANEL
        </Button>
      </Div>
    </Panel>
  );
};

export default TestPanel2;
