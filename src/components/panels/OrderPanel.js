import React from "react";
import { Panel, Title, Button, Div } from "@vkontakte/vkui";

const OrderPanel = (props) => {
  return (
    <Panel id={props.id}>
      <Div>
        <Title>ORDER PANEL</Title>
      </Div>
      <Div>
        <Button>CATALOG PANEL</Button>
      </Div>
    </Panel>
  );
};

export default OrderPanel;
