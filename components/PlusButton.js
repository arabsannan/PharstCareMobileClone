import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const PlusButton = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-row justify-end`}>
      <TouchableOpacity
        style={[styles.plusButton, tw`shadow-lg bg-white`]}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={tw`text-red-600 text-3xl`}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  plusButton: {
    flex: 1,
    width: 50,
    height: 50,
    bottom: -40,
    right: 15,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:'flex-end',
    borderRadius: 100,
  },
});
