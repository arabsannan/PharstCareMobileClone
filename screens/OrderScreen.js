import React from "react";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Icon, Image, Button, Text } from "react-native-elements";
import PlusButton from "../components/PlusButton";

const OrderScreen = ({ navigation }) => {
  return (
    <View style={[tw`bg-white flex-1`]}>
      <View style={[tw`py-2 pl-3 bg-blue-600 flex-row justify-between`]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon
            name="angle-left"
            style={tw`py-1`}
            type="fontisto"
            color="white"
            size={20}
          />
        </TouchableOpacity>
        <View>
          <Text h4 style={[tw`text-white py-2  `, styles.headerText]}>
            Quick Order
          </Text>
        </View>
        <Text></Text>
      </View>
      <View style={tw`px-6 py-2`}>
        <Text style={tw`text-gray-500 text-lg font-bold`}>
          Please tell us what you need and we will get back in seconds.
        </Text>
        <View style={tw`justify-center self-center`}>
          <Image
            style={styles.image}
            source={require("../assets/img/medicine_trans.png")}
          />
        </View>
        <TextInput
          placeholder="Phone Number"
          style={[tw`bg-gray-100 rounded p-3`, styles.input1]}
        />
        <TextInput
          placeholder="Your request...."
          style={[tw`bg-gray-100 rounded p-3 mt-4 mb-5`, styles.input2]}
        />
        <TouchableOpacity
          style={tw`bg-blue-600 h-10 mb-3
           rounded-full shadow justify-center`}
        >
          <Text style={tw`self-center text-white`}>Make Request</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`my-2`}>
        <PlusButton />
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    lineHeight: 22,
  },
  image: {
    width: 109,
    height: 170,
    marginVertical: 20,
  },
  input1: {
    height: 50,
  },
  input2: {
    height: 100,
  },
  plusButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
