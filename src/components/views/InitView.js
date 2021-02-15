import React from "react";
import { View } from "@vkontakte/vkui";

import InitPanel from "../panels/InitPanel";

import * as constants from "../../utils/constants";

const InitView = (props) => {
  return (
    <View id={props.id} activePanel={constants.INIT_PANEL}>
      <InitPanel id={constants.INIT_PANEL} />
    </View>
  );
};

export default InitView;
