import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";

import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListScreenStacks from "./TopListsStacks";
import SearchScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./AccountStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreenStacks,
      navigationOptions: () => ({
        safeAreaInsets: { top: 0 },
        tabBarLabel: "Restaurantes",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    TopLists: {
      screen: TopListScreenStacks,
      safeAreaInsets: { top: 0 },
      navigationOptions: () => ({
        tabBarLabel: "Ranking",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Search: {
      screen: SearchScreenStacks,
      safeAreaInsets: { top: 0 },
      navigationOptions: () => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Account: {
      screen: AccountScreenStacks,
      safeAreaInsets: { top: 0 },
      navigationOptions: () => ({
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: "Account",
    order: ["Restaurants", "TopLists", "Search", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680",
    },
  }
);

export default createAppContainer(NavigationStacks);
