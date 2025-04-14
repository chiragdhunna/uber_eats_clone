import { View, Text, Image   } from 'react-native'
import React from 'react'

const YelpRestaurantInfo = {
  name:"Hotel Taj Lake Front",
  image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhaiUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  price:"$$",
  reviews:"1500",
  rating:"4.5",
  categories: [{ title: "Taj Lake Front" }, { title: "Luxury" }],
};  

export default function About(props) {
  const {name,image,price,reviews,rating,categories} = props.route.params ;

  const FormatedCategories = categories.map((cat) => cat.title).join(" · ");

  const description = `${FormatedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      {/* <Text>About</Text> */}
      <RestaurantImage image={image}/>
      <RestaurantName name={name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image
    source={{
        uri:props.image
    }}
    style={{
        width:"100%",
        height:180
    }}/>
);

const RestaurantName = (props) => 
<Text style={{
  fontSize:29,
  fontWeight:"600",
  marginTop:10,
  marginHorizontal:15
}}>{props.name}</Text>;

const RestaurantDescription = (props) => (
  <Text style={{
    marginTop:10,
    marginHorizontal:15,
    fontWeight:"400",
    fontSize:15.5
    // flexWrap:"wrap"
  }}>{props.description}</Text>
);