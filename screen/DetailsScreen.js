import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View,  ScrollView, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function DetailsScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.menu_chose}>
          <View style={styles.menu_chose_first}> 
            <View style={{flexDirection: 'row', alignItems: "center"}}>
              <MaterialCommunityIcons name="sort-descending" size={24} color="pink" />
              <Text style={{fontSize: 14, paddingLeft: 3}}>Sắp xếp</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: "center", marginLeft: 10}}>
              <MaterialCommunityIcons name="sort-descending" size={24} color="pink" />
              <Text style={{fontSize: 14, paddingLeft:3}}>Bộ lọc</Text>
            </View>
          </View>
          <View style={styles.menu_chose_second}>
            <View style={styles.menu_chose_second_icon}>
              <FontAwesome5 name="th-list" size={20} color="pink" style={{backgroundColor: 'grey', padding: '10%'}}/>
              <MaterialCommunityIcons name="map-marker-radius" size={20} color="black" style={{ padding: '10%'}}/>
            </View>
          </View>
        </View>
        <View style={styles.flatList}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.card}>
            <View style={styles.card_Img}>
              <Image style={styles.Image} source={require('../assets/Hotel1.jpg')}/>
            </View>
            <View style={styles.card_Info}>
              <View style={styles.card_row_1}>
                <View style={styles.card_title}>
                    <Image style={styles.card_title_img} source={require('../assets/Dinogo.jpeg')} />  
                  <Text  style={{fontSize: 12, fontWeight: "bold", color: '#f60053',  textAlign: 'left', marginLeft: 20}}>Cozrum Homes Trương Định</Text>
                </View>
                <View style={styles.card_heart}>
                  <AntDesign name="hearto" size={18} color="black" />
                </View>
              </View>
              <View style={styles.card_row_2}>
                <Text style={{fontSize: 11, color: 'grey', paddingLeft: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
                <View style={{flexDirection: 'row', paddingLeft: 15, paddingTop: 10}}>
                  <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                  <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                  <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                  <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
                  <Text style={{color: 'grey', marginLeft: 7, fontSize: 12, fontWeight: 'bold'}}>Tuyệt vời</Text>
                </View>
              </View>
              <View style={styles.card_row_3}>
                <View style={{height: 40, width: 200, borderRadius: 7, backgroundColor: 'lightblue', marginLeft: 13}}>
                  <Text style={{textAlign: 'right', fontSize: 15, paddingTop: 3, paddingRight: 7}}>431.707 đ/Đêm</Text>
                  <Text style={{textAlign: 'right', fontSize: 12, paddingTop: 2, paddingRight: 7}}>Đã bao gồm thuế phí</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_Img}>
            <Image style={styles.Image} source={require('../assets/Hotel1.jpg')}/>
            </View>
            <View style={styles.card_Info}>
            <View style={styles.card_row_1}>
                <View style={styles.card_title}>
                  <Image style={styles.card_title_img} source={require('../assets/Dinogo.jpeg')} />
                  <Text  style={{fontSize: 12, fontWeight: "bold", color: '#f60053', textAlign: 'left', marginLeft: 20}}>Cozrum Lux Hotel by Olive</Text>
                </View>
                <View style={styles.card_heart}>
                  <AntDesign name="hearto" size={18} color="black" />
                </View>
              </View>
              <View style={styles.card_row_2}>
                <Text style={{fontSize: 11, color: 'grey', paddingLeft: 10}}>TK15/13 Nguyễn Cảnh Chân, Quận 1,  Hồ Chí Minh</Text>
                <View style={{flexDirection: 'row', paddingLeft: 15, paddingTop: 10}}>
                  <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                  <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                  <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                  <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>8.7</Text>
                  <Text style={{color: 'grey', marginLeft: 7, fontSize: 12, fontWeight: 'bold'}}>Rất tốt</Text>
                </View>
              </View>
              <View style={styles.card_row_3}>
                <View style={{height: 40, width: 200, borderRadius: 7, backgroundColor: 'lightblue', marginLeft: 13}}>
                  <Text style={{textAlign: 'right', fontSize: 15, paddingTop: 3, paddingRight: 7}}>431.707 đ/Đêm</Text>
                  <Text style={{textAlign: 'right', fontSize: 12, paddingTop: 2, paddingRight: 7}}>Đã bao gồm thuế phí</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_Img}>
            <Image style={styles.Image} source={require('../assets/Hotel1.jpg')}/>
            </View>
            <View style={styles.card_Info}>
            <View style={styles.card_row_1}>
                <View style={styles.card_title}>
                  <Image style={styles.card_title_img} source={require('../assets/Dinogo.jpeg')} />
                  <Text  style={{fontSize: 12, fontWeight: "bold", color: '#f60053', textAlign: 'left', marginLeft: 20}}>Cozrum Homes Riverside Bến Vân Đồn</Text>
                </View>
                <View style={styles.card_heart}>
                  <AntDesign name="hearto" size={18} color="black" />
                </View>
              </View>
              <View style={styles.card_row_2}>
                <Text style={{fontSize: 11, color: 'grey', paddingLeft: 10}}>80A Bến Vân Đồn, Quận 4, Hồ Chí Minh</Text>
                <View style={{flexDirection: 'row', paddingLeft: 15, paddingTop: 10}}>
                  <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                  <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>8.7</Text>
                  <Text style={{color: 'grey', marginLeft: 7, fontSize: 12, fontWeight: 'bold'}}>Rất tốt</Text>
                </View>
              </View>
              <View style={styles.card_row_3}>
                <View style={{height: 40, width: 200, borderRadius: 7, backgroundColor: 'lightblue', marginLeft: 13}}>
                  <Text style={{textAlign: 'right', fontSize: 15, paddingTop: 3, paddingRight: 7}}>431.707 đ/Đêm</Text>
                  <Text style={{textAlign: 'right', fontSize: 12, paddingTop: 2, paddingRight: 7}}>Đã bao gồm thuế phí</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        </View>
      </SafeAreaView>
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
