import React from "react";
import { Panel, Title, Div, Button } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import { setPanel } from "../../store/history/actions";

const TestPanel1 = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel id={props.id}>
      <Div>
        <Title>TEST PANEL 1</Title>
      </Div>
      <Div>
        <Button
          onClick={() =>
            dispatch(
              setPanel({
                history: "catalogHistory",
                panel: "TEST_PANEL_2",
              })
            )
          }
        >
          TO TEST PANEL 2
        </Button>
      </Div>
    </Panel>
  );
};

export default TestPanel1;
