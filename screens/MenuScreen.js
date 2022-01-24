import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon, Image, Text } from "react-native-elements";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomNav from "../components/BottomNav";

const Drawer = createDrawerNavigator();

const DrawerList = [
  { label: "Victoria", icon: "assistant", type: "material-community" },
  {
    label: "Health Blogs",
    icon: "shield-cross",
    type: "material-community",
  },
  { label: "Social Health", icon: "mode-comment", type: "material" },
  { label: "About App", icon: "info", type: "foundation" },
  { label: "Med Tracker", icon: "md-medkit", type: "ionicon" },
];

function CustomDrawerContent(props) {
  return (
    <View style={tw`flex-1`}>
      <View style={[tw`py-2 pl-3 bg-blue-600 flex-row justify-between`]}>
        <Icon
          onPress={() => props.navigation.toggleDrawer()}
          name="angle-left"
          style={tw`py-1`}
          type="fontisto"
          color="white"
          size={20}
        />
        <Text h4 style={[tw`text-white py-2`, styles.headerText]}>
          Menu
        </Text>
        <Text></Text>
      </View>
      <View style={tw`items-center justify-center`}>
        <Image
          source={require("../assets/img/pharst_logo.png")}
          style={[tw`mt-3 rounded-full`, styles.logo]}
        />
        <Text style={tw`text-lg`}>Name</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem style={tw`p-7`} label="Close drawer" /> */}
        {DrawerList.map((item) => {
          return (
            <View style={tw``}>
              <DrawerItem
                icon={() => (
                  <Icon
                    name={item.icon}
                    type={item.type}
                    color="gray"
                    size={24}
                  />
                )}
                label={item.label}
                onPress={() => props.navigation.toggleDrawer()}
              />
            </View>
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
}
const MenuScreen = () => {
  return (
    <Drawer.Navigator
      odefaultStatus="open"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="My Account" component={BottomNav} />
      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  headerText: {
    lineHeight: 20,
  },
  logo: {
    height: 100,
    width: 100,
    borderWidth: 0.5,
    borderColor: "#2d00fb",
  },
});
