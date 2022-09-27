import {NavigationContainer} from "@react-navigation/native";
import HomeView from "./views/HomeView";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameView from "./views/GameView";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeView}/>
          <Tab.Screen name="Game" component={GameView}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
