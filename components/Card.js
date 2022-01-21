import React from "react";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Card = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.goto)}
      style={[tw`bg-gray-100 rounded-lg`, styles.container]}
    >
      <View style={[tw`bg-blue-600 self-start mx-1 mb-2 -mt-5 rounded-2xl`]}>
        <Text style={[tw`px-3 text-white `]}>Available</Text>
      </View>
      <View style={tw`flex-row pb-4`}>
        <View style={[tw`pl-3`]}>
          <Image style={styles.image} source={props.image} />
        </View>
        <View style={[tw`mx-2 px-2 flex-shrink`]}>
          <Text style={tw`font-bold text-lg`}>{props.heading}</Text>
          <Text>{props.subtext}</Text>
        </View>
      </View>
      <View style={[tw`border-t py-1 border-gray-400 flex-row justify-end`]}>
        <Text style={[tw`text-blue-600 py-1 font-bold text-base self-end`]}>
          Let's Go{" "}
        </Text>
        <Icon
          style={tw`py-2`}
          name="arrow-right"
          type="feather"
          size={18}
          color="#2563eb"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
  },
  image: {
    width: 45,
    height: 70,
  },
});
