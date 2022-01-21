import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import BottomNav from "./components/BottomNav";
import PlusButton from "./components/PlusButton";
import MenuScreen from "./screens/MenuScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Text style={tw`bg-blue-600 h-6`}></Text>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="TabBottom" component={BottomNav} />
          </Stack.Navigator>
          {/* <BottomNav /> */}
          {/* <MenuScreen /> */}
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    // paddingTop: 25,
  },
});
