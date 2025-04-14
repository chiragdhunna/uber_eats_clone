import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import firebase from "../firebase";
import MenuItems from '../components/restaurantDetail/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';

function SomeComponent() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
    </SafeAreaView>
  );
}

export default function OrderCompleted() {
  const [lastOrder, setlastOrder] = useState({
    items : [
      {
        title: "Bologna",
        description: "With Butter Lettuce Tomato and sause",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1647353337660-8b27b53b07f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9sb2duYSUyMGRpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      }
    ]
  })
  const [modalVisible, setModalVisible] = useState(false);

  const {items, restaurantName} = useSelector((state) => state.cartReducers.selectedItems);

  
  const total = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en',{
    style:'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("orders")
    .orderBy('createdAt','desc')
    .limit(1)
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        setlastOrder(doc.data());
      });
    });

    return () => unsubscribe();
  }, 
  []);

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <View style={{
        margin:15,
        alignItems:'center',
        height:"100%"
      }}>
      {/* Green Checkbar Animation */}
      <LottieView style={{
        height:100,
        alignSelf:'center',
        marginBottom:30
      }}
      source={require('../assets/animations/check-mark.json')}
      autoPlay
      speed={0.5}
      loop={true}/>
      <Text style={{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
      }}>Your Order at {restaurantName} has been placed for {totalUSD}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10}/>
      {/* Cooking Animation */}
      <LottieView style={{
        height:200,
        alignSelf:'center',
        marginBottom:30
      }}
      source={require('../assets/animations/cooking.json')}
      autoPlay
      speed={0.5}
      loop={true}/>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}