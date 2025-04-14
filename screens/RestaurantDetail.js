import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
  {
    title: "Lasagna",
    description: "Classic Italian dish with layers of pasta, cheese, and meat sauce",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1546453570-d2fcacdafbb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExhc2FnbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Tandoori Chicken",
    description: "Traditional Indian dish with marinated chicken cooked in a clay oven",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRhbmRvb3JpJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chilaquiles",
    description: "Traditional Mexican dish with fried tortilla chips, salsa, cheese, and toppings",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1640719028782-8230f1bdc42a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpbGFxdWlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Margherita Pizza",
    description: "Classic Italian pizza topped with fresh mozzarella, tomatoes, and basil",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Sushi Rolls",
    description: "Assortment of fresh sushi rolls with a variety of fillings and flavors",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VzaGklMjBSb2xsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chicken Shawarma",
    description: "Middle Eastern dish with marinated chicken, spices, and a tangy garlic sauce",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFNoYXdhcm1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
      title: "Sushi Rolls",
      description: "Assortment of fresh sushi rolls with a variety of fillings and flavors",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VzaGklMjBSb2xsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Chicken Shawarma",
      description: "Middle Eastern dish with marinated chicken, spices, and a tangy garlic sauce",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFNoYXdhcm1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    }
];

export default function RestaurantDetail({route, navigation}) {
  return (
    <>
    <View>
      <About route={route}/>
      <Divider 
      width={1.8}
      style={{
        marginVertical:20
      }}/>
      <MenuItems restaurantName={route.params.name} foods={foods}/>
    </View>
      <ViewCart navigation={navigation}/>
      </>
  )
}