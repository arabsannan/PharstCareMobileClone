import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../components/Colors";
import MenuScreen from "../screens/MenuScreen";
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ConsultationScreen from "../screens/ConsultationScreen";
import * as Animatable from "react-native-animatable";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: "feather",
    icon: "home",
    component: HomeScreen,
    color: Colors.primary,
    alphaClr: Colors.primaryAlpha,
  },
  {
    route: "Order",
    label: "Quick Order",
    type: "feather",
    icon: "bell",
    component: OrderScreen,
    color: Colors.green,
    alphaClr: Colors.greenAlpha,
  },
  {
    route: "Consult",
    label: "Talk to Doctor",
    type: "ionicons",
    icon: "person-outline",
    component: ConsultationScreen,
    color: Colors.red,
    alphaClr: Colors.redAlpha,
  },
  {
    route: "Activity",
    label: "My Activity",
    type: "antdesign",
    icon: "bars",
    component: ActivityScreen,
    color: Colors.purple,
    alphaClr: Colors.purpleAlpha,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.5 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "#86d5fc", borderRadius: 20 },
          ]}
        />
        <View
          style={[styles.btn, { backgroundColor: focused ? null : "white" }]}
        >
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.primary : "#8e9599"}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: Colors.black,
                  paddingHorizontal: 8,
                }}
              >
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          borderTopWidth: 0,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
});
