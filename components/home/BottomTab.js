import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwsome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTab() {
  return (
    <View style={{
      flexDirection:"row",
      margin:10 ,
      marginHorizontal:10,
      justifyContent:"space-between"
    }}>
      <Icon icon="home" text="Home"/>
      <Icon icon="search" text="Browse"/>
      <Icon icon="shopping-bag" text="Grocery"/>
      <Icon icon="receipt" text="Orders"/>
      <Icon icon="user" text="Account"/>
      {/* <Text>Bottoms UP</Text> */}
    </View>
  )
}

const Icon = (props) => (
  <TouchableOpacity>
  <View>
  <FontAwsome5 
  name={props.icon} 
    size={25} 
    style={{
      marginBottom:3,
      alignSelf: "center",
  }}
  />
  <Text>{props.text}</Text>
  </View>
  </TouchableOpacity>
);