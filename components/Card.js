import React from "react";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon, Image } from "react-native-elements";

const Card = () => {
  return (
    <View>
      <TouchableOpacity
        style={[tw`bg-gray-100 flex-row rounded-lg`, styles.container]}
      >
        <Image
          style={styles.image}
          source={require("../assets/img/sad_sick.png")}
        />
        <View style={[tw`m-2 p-2`]}>
          <Text>Quick Consultation</Text>
          <Text>Tap on this make a request for consultation</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: "120%",
    width: "90%",
    margin: 15,
    padding: 10,
  },
  image: {
    width: 70,
    height: 100,
  },
});
