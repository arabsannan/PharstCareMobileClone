import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Card from "../components/Card";
import PlusButton from "../components/PlusButton";


const ConsultationTab = () => {
  return (
    <View style={[tw`bg-white flex-1`]}>
      <Card
        goto="Consult"
        image={require("../assets/img/medicine_trans.png")}
        heading="Quick Consultation"
        subtext="Tap on this to make a request for consultation"
      />
       <View style={tw`my-28 py-32`}>
        <PlusButton />
      </View>
    </View>
  );
};

export default ConsultationTab;

const styles = StyleSheet.create({});
