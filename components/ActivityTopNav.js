import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ConsultationTab from "../components/ConsultationTab";
import DeliveryTab from "../components/DeliveryTab";

const Tab = createMaterialTopTabNavigator();

const ActivityTopNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Consultations"
      screenOptions={{
        tabBarActiveTintColor: "#175dd3",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "none",
        },
        tabBarItemStyle: {},
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
          borderBottomWidth: 0,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopRightRadius: 35,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Consultations"
        component={ConsultationTab}
        options={{ tabBarLabel: "Consultations" }}
      />
      <Tab.Screen
        name="Deliveries"
        component={DeliveryTab}
        options={{ tabBarLabel: "Deliveries" }}
      />
    </Tab.Navigator>
  );
};

export default ActivityTopNav;

const styles = StyleSheet.create({});
