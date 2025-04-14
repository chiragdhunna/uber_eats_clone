import { View, Text, TouchableOpacity, ScrollViewComponent, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories';
import RestrauntItems, { localRestraunts } from '../components/home/RestrauntItems';
import BottomTab from '../components/home/BottomTab';
import {Divider} from "react-native-elements";

const YELP_API_KEY = 
  "cfomVrLlfV2GPaV-uEvGpqKOWybPb6MOT4CGIOqvoL6uJlaK0_SJIaB-W0sbBOGS7uc0quU9-T09nynf9_V8PZFV4h8CGvsXzGRL3xSvFsYjBjMeIowd5xSC01WcZHYx";

function SomeComponent() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </SafeAreaView>
    );
  }

export default function Home({navigation}) {
  const [restaurantData, setRestrauntData] = React.useState(localRestraunts);
  const [city, selectCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpurl = 
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  

  const apioptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,

    },
  };

    return fetch(yelpurl,apioptions)
    .then((res) => res.json())
    .then((json) =>
        setRestrauntData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
};

useEffect(() => {
  getRestaurantsFromYelp();
}, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
      <View style={{backgroundColor:"white", padding:15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar
        cityHandler={selectCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestrauntItems 
        restaurantData={restaurantData}
        navigation = {navigation} 
        />
        {/* <RestrauntItems/> */}
      </ScrollView>
      <Divider width={1}/>
      <BottomTab/>
    </SafeAreaView>
  )
}
