import React from "react";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Icon, Image, Button, Text } from "react-native-elements";
// import BottomNav from "../components/BottomNav";

const OrderScreen = ({ navigation }) => {
  return (
    <View style={[tw`bg-white h-full`]}>
      <View style={[tw`py-3 pl-3 bg-blue-600 justify-between `, styles.header]}>
        <TouchableOpacity onPress={() => navigation.navigate("Consult")}>
          <Icon
            name="angle-left"
            type="fontisto"
            color="white"
            size={20}
            style={tw``}
          />
        </TouchableOpacity>

        <View>
          <Text h4 style={[tw`text-white pl-5`, styles.headerText]}>
            Quick Order
          </Text>
        </View>
        <Text></Text>
      </View>
      <View style={tw`p-5`}>
        <Text h4 style={tw`text-gray-500`}>
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
        <View style={tw`flex-row justify-end`}>
          <TouchableOpacity style={[styles.plusButton, tw`shadow-lg bg-white`]}>
            <Text style={tw`text-red-600 text-3xl`}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    // alignSelf: "center",
    // textAlign: 'center'
  },
  headerText: {
    lineHeight: 22,
    fontWeight: "800",
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
