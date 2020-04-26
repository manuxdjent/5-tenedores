import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

export const SearchScreenStacks = createStackNavigator({
  Restaurants: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Busca tu restaurante",
    }),
  },
});

export default SearchScreenStacks;
