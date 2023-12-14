// import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font"; // import this hook
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from "expo-app-loading";

import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import SchoolScreen from "./screens/SchoolScreen";
import CourseListing from "./screens/CourseListing";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#170f0f" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#260000" },
      }}
    >
      <Stack.Screen name="School" component={SchoolScreen} />
      <Stack.Screen name="Course Listing" component={CourseListing} />
    </Stack.Navigator>
  );
}

export default function App() {
  // Load the fonts
  const [fontsLoaded] = useFonts({
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  // If fonts have not loaded yet, return AppLoading
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#170f0f" },
            headerTintColor: "white",
            tabBarActiveTintColor: "white",
            tabBarActiveBackgroundColor: "#610000",
            tabBarInactiveTintColor: "#ddd",
            tabBarInactiveBackgroundColor: "#170f0f",
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Skills"
            component={SkillsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="list" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="SchoolStack"
            component={StackNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="school" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
