import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import ActivityTopNav from "../components/ActivityTopNav";
import PlusButton from "../components/PlusButton";


const ActivityScreen = () => {
  return (
    <View style={[tw`bg-blue-600 flex-1`]}>
      <View style={[tw`py-3 pl-3 justify-between `, styles.header]}>
        <Text h4 style={[tw`text-white`, styles.headerText]}>
          My Activity
        </Text>
        <Image
          source={require("../assets/img/pharst_logo.png")}
          style={[tw`mt-2 mr-6 rounded-full`, styles.logo]}
        />
      </View>
      <View style={styles.parent}>
        <ActivityTopNav />
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
    height: "100%",
  },
});
