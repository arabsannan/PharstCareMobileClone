import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SearchBar, Icon, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";


const HomeScreen = () => {
  return (
    <View style={[tw`bg-white h-full`]}>
      <View style={tw`p-5 py-28 mb-20`}>
        <Text style={[tw`text-blue-600`, styles.textOne]}>
          Phars
          <Text style={[tw`text-red-600 font-semibold`, styles.textTwo]}>
            +
          </Text>
        </Text>
        <Text style={[tw`text-red-600`, styles.textTwo]}>Care</Text>
        <SearchBar
          placeholder="Type Drug Name"
          containerStyle={tw`bg-white border-0 py-5`}
          inputContainerStyle={tw`px-2 rounded-full bg-white shadow-lg`}
          clearIcon={<Icon name="search" type="font-awesome" color="white" />}
          // rightIconContainerStyle={tw`bg-blue-500 w-10 rounded-r-full`}
          searchIcon={<Icon name="camera" type="font-awesome" color="gray" />}
        />

        <View style={tw`flex-row justify-end`}>
          <TouchableOpacity style={[styles.plusButton, tw`shadow-lg bg-white`]}>
            <Text style={tw`text-red-600 text-3xl`}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  plusButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  textOne: {
    fontSize: 60,
    fontWeight: "700",
  },
  textTwo: {
    fontSize: 60,
  },
});
