import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, YellowBox, ScrollView, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen'
import DetailsScreen from './screen/DetailsScreen'
import LogoTitle from './components/LogoTitle'
import HomeTitle from './components/HomeTitle'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options = {({navigation}) => ({ headerTitle: () => <HomeTitle  /> ,
          headerRight: () => (
           <Button
           onPress={() => navigation.navigate('Details')}
           title="Info"
           color="#111"
           />
         ),
        })}/>
        <Stack.Screen name="Details" 
        component={DetailsScreen}
        options={{ headerTitle: () => <LogoTitle  /> ,
                   headerRight: () => (
                    <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#111"
                    />
                  ),
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_chose:{
    flex: 0.078,
    backgroundColor: "#fff",
    flexDirection: 'row',
    marginTop: -19,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  menu_chose_first: {
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row",
    marginLeft: 10,
  },
  menu_chose_second:{
    flex: 0.5,
    flexDirection: "row-reverse",
    height: 35,
    paddingLeft: 20,
  },
  menu_chose_second_icon: {
    flexDirection: 'row',
    alignItems: "center",
    borderColor: 'grey',
    borderWidth: 1,
    width: 73,
    justifyContent: "space-between",
  },
  flatList: {
    flex: 0.922,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    paddingRight: 10,
    paddingTop: 10
  },
  card: {
    flexDirection: "row",
    flex: 1,
    width: 340,
    height: 185,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    marginRight: 5,
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card_Img: {
    flex: 0.35,
  },
  Image: {
    width: 119,
    height: 185,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  card_Info: {
    flex: 0.65,
  },
  card_row_1: {
    flex: 0.25,
    flexDirection: 'row',
  },
  card_row_2: {
    flex: 0.5,
  },
  card_row_3: {
    flex: 0.25,
  },
  card_title: {
    flex: 0.80,
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: 7,
    alignItems: "center",
    flexWrap: 'wrap',
    position: "relative",
  },
  card_title_img:{
    width: 18,
    height: 18,
    borderRadius: 10,
    position: "absolute",
    top: 7,
    left: 10,

  },
  card_heart: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  backButton_custom: {
    color: 'pink',
  }
});
