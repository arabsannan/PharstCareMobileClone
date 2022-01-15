import React from "react";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Icon, Image, Button, Text } from "react-native-elements";
import PlusButton from "../components/PlusButton";

const ConsultationScreen = ({ navigation }) => {
  return (
    <View>
      <View style={[tw`py-3 pl-3 bg-blue-600 justify-between `, styles.header]}>
        <TouchableOpacity onPress={() => navigation.navigate("Order")}>
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
            Quick Consultation
          </Text>
        </View>
        <Text></Text>
      </View>
      <View style={tw`p-5`}>
        <Text style={tw`text-xl font-bold text-gray-500`}>
          Please report your issue here, a doctor will reach out to you
          immediately.
        </Text>
        <View style={tw`justify-center self-center`}>
          <Image
            style={styles.image}
            source={require("../assets/img/sad_sick.png")}
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
          <Text style={[tw`self-center text-white`, styles.btnText]}>
            Send Complaint
          </Text>
        </TouchableOpacity>
        <PlusButton />
      </View>
    </View>
  );
};

export default ConsultationScreen;

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
    // fontWeight: "800",
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
});
