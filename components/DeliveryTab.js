import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Card from "../components/Card";
import PlusButton from "../components/PlusButton";

const DeliveryTab = () => {
  return (
    <View style={[tw`bg-white flex-1`]}>
      <Card
        goto="Order"
        image={require("../assets/img/sad_sick.png")}
        heading="Quick Order"
        subtext="Tap on this to make an order for medication"
      />
      <View style={tw`my-28 py-32`}>
        <PlusButton />
      </View>
    </View>
  );
};

export default DeliveryTab;

const styles = StyleSheet.create({});
