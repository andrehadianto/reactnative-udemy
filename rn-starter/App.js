import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorScreen from "./src/screens/ColorScreen";
import { ComponentsScreen } from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
        Color: ColorScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
