import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SearchBar, Icon, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import PlusButton from "../components/PlusButton";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  return (
    <View style={[tw`bg-white flex-1`]}>
      <View style={tw`p-5 py-28 mb-24`}>
        <Text style={[tw`text-blue-600`, styles.textOne]}>
          Phars
          <Text style={[tw`text-red-600 font-semibold`, styles.textTwo]}>
            +
          </Text>
        </Text>
        <Animatable.Text
          style={[tw`text-red-600`, styles.textTwo]}
          animation="fadeInLeftBig"
        >
          Care
        </Animatable.Text>
        <SearchBar
          placeholder="Type Drug Name"
          containerStyle={tw`bg-white border-0 py-5`}
          inputContainerStyle={tw`px-2 rounded-full bg-white shadow-lg`}
          clearIcon={<Icon name="search" type="font-awesome" color="white" />}
          // rightIconContainerStyle={tw`bg-blue-500 w-10 rounded-r-full`}
          searchIcon={<Icon name="camera" type="font-awesome" color="gray" />}
        />
      </View>
      <View style={tw`my-3`}>
        <PlusButton />
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
