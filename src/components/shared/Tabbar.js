import React, { memo } from "react";
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";
import {
  Icon28ShoppingCartOutline,
  Icon28AllCategoriesOutline,
} from "@vkontakte/icons";

import { setView } from "../../store/history/actions";
import * as constants from "../../utils/constants";

const TabbbarComponent = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.history.view);

  const setViewHandler = (selectedView) => {
    if (view !== selectedView) {
      dispatch(setView(selectedView));
    }
  };

  return (
    <Tabbar
      style={{
        bottom:
          view === constants.INIT_VIEW || view === constants.ORDER_VIEW
            ? -100
            : 0,
      }}
    >
      <TabbarItem
        selected={view === constants.CATALOG_VIEW}
        onClick={() => setViewHandler(constants.CATALOG_VIEW)}
      >
        <Icon28AllCategoriesOutline />
      </TabbarItem>
      <TabbarItem
        selected={view === constants.CHECKOUT_VIEW}
        onClick={() => setViewHandler(constants.CHECKOUT_VIEW)}
      >
        <Icon28ShoppingCartOutline />
      </TabbarItem>
    </Tabbar>
  );
};

export default memo(TabbbarComponent);
