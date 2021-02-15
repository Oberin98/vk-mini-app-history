import React from "react";
import { View } from "@vkontakte/vkui";
import { useSelector } from "react-redux";

import CatalogPanel from "../panels/CatalogPanel";
import ProductCardPanel from "../panels/ProductCardPanel";
import TestPanel1 from "../panels/TestPanel1";
import TestPanel2 from "../panels/TestPanel2";

import * as constants from "../../utils/constants";

const CatalogView = (props) => {
  const history = useSelector((state) => state.history.catalogHistory);

  console.log(history);

  return (
    <View
      id={props.id}
      history={history}
      activePanel={history[history.length - 1]}
    >
      <CatalogPanel id={constants.CATALOG_PANEL} />
      <ProductCardPanel id={constants.PRODUCT_CARD_PANEL} />
      <TestPanel1 id="TEST_PANEL_1" />
      <TestPanel2 id="TEST_PANEL_2" />
    </View>
  );
};

export default CatalogView;
