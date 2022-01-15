import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Card from "../components/Card";

const ActivityScreen = () => {
  return (
    <View style={[tw`bg-blue-600`]}>
      <View style={[tw`py-3 pl-3 justify-between `, styles.header]}>
        <Text h4 style={[tw`text-white`, styles.headerText]}>
          My Activity
        </Text>
        <Image
          source={require("../assets/img/pharst_logo.png")}
          style={[tw`mt-2 mr-6 rounded-full`, styles.logo]}
        />
      </View>
      <View style={[tw`bg-red-200`, styles.parent]}>
        <Text>Hiiiiii</Text>
        <Card />
      </View>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  logo: {
    height: 65,
    width: 65,
  },
  header: {
    flexDirection: "row",
  },
  headerText: {
    lineHeight: 80,
  },
  parent: {
    height: 80,
    borderTopRightRadius: 35,
  },
});
