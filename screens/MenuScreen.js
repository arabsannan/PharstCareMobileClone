import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OrderScreen from "./OrderScreen";
import ActivityScreen from "./ActivityScreen";
import HomeScreen from "./HomeScreen";
import BottomNav from "../components/BottomNav";

const Drawer = createDrawerNavigator();

const MenuScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Bottom Nav" component={BottomNav} />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
