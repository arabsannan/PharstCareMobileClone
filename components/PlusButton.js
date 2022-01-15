import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

const PlusButton = () => {
  return (
    <View style={tw`flex-row justify-end`}>
      <TouchableOpacity style={[styles.plusButton, tw`shadow-lg bg-white`]}>
        <Text style={tw`text-red-600 text-3xl`}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  plusButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
