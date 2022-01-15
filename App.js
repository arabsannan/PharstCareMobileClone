import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text } from "react-native";
import BottomNav from "./components/BottomNav";


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Text style={tw`bg-blue-600 h-6`}></Text>
          <BottomNav />
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
