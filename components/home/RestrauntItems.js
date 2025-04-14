import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestraunts = [
  {
    name: "Sunny Bistro",
    image_url: "https://images.unsplash.com/photo-1626238584865-319a8f03260d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RyYXVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    categories: ["Cafe", "Brunch"],
    prices: "$$",
    reviews: 1367,
    rating: 4.2
  },
  {
    name: "Seaside Lounge",
    image_url: "https://images.unsplash.com/photo-1687068283776-fd69669beab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RyYXVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    categories: ["Bar", "Seafood"],
    prices: "$$$",
    reviews: 289,
    rating: 4.8
  },
  {
    name: "Urban Delight",
    image_url: "https://images.unsplash.com/photo-1683225757624-86943fb48966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc3RyYXVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    categories: ["Cafe", "International"],
    prices: "$$$",
    reviews: 542,
    rating: 4.5
  },
  {
    name: "Harbor View Grill",
    image_url: "https://images.unsplash.com/photo-1665934629826-e48c6ab70fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlc3RyYXVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    categories: ["Seafood", "Fine Dining"],
    prices: "$$$$",
    reviews: 978,
    rating: 4.6
  },
  {
    name: "Riverside Cafe",
    image_url: "https://images.unsplash.com/photo-1684482610161-4e8acd76d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJlc3RyYXVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    categories: ["Cafe", "American"],
    prices: "$$",
    reviews: 705,
    rating: 4.1
  }
  
]

export default function Restraunt({navigation, ...props}) {
  return (
    <>
      {props.restaurantData.map((restraunt,index) => (
        <TouchableOpacity
        key={index} 
        activeOpacity={1} 
        style={{marginBottom:30}}
        onPress= {() => navigation.navigate("RestaurantDetail",
        {name:restraunt.name,
        image:restraunt.image_url,
        price:restraunt.price,
        reviews:restraunt.review_count,
        rating:restraunt.rating,
        categories:restraunt.categories,})}>
          <View 
            style={{
              marginTop:10,
              padding:15,
              backgroundColor:"white"}}>
        {/* Restraunt Image */}
            <RestrauntImage image={restraunt.image_url}/>
        {/* Restraunt Info */}
            <RestrauntInfo name={restraunt.name} rating={restraunt.rating}/>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestrauntImage = (props) =>(
    <>
    <Image 
      source={{
        uri:props.image
    }}
      style={{
        width:"100%",
        height: 180,
        }}/>
    <TouchableOpacity style={{position:"absolute", right:20, top:20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
    </TouchableOpacity>
    </>
);

const RestrauntInfo = (props) => (
  <View style={{
    flexDirection:"row", 
    justifyContent:"space-between", 
    alignItems:"center", 
    marginTop:10}}>
      <View>
        <Text style={{
          fontSize:15,
          fontWeight:"bold"
        }}>{props.name}</Text>
        <Text style={{
          fontSize:13,
          color:"grey"
        }}>30-45 • min</Text>
      </View>
      <View style={{
        backgroundColor:"#eee",
        height:30,
        width:30,
        alignItems:"center",
        borderRadius:15,
        justifyContent:"center"
      }}>
        <Text>{props.rating}</Text>
      </View>
  </View>
);