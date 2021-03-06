import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, ScrollView, Dimensions, Image  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const wd = Dimensions.get('window').width;
export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView_container} >
          <View style={styles.booking_container}>
            <View style={styles.booking_padding}>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="map-marker-radius" size={17} color="grey" />
                <Text style={styles.booking_footer}>Địa điểm hoặc khách sạn</Text>
              </View>
              <View style={styles.location_input}>
                <Text style={styles.location_input_placeholder}>Nhập điểm đến hoặc tên khách sạn</Text>
              </View>
              <View style={styles.date_input}>
                <Text style={styles.date_day}>9</Text>
                <View style={{paddingRight: 30}}>
                  <Text style={styles.date_weekdays}>Chủ nhật</Text>
                  <Text style={styles.date_month}>Tháng 8</Text>
                </View>
                <FontAwesome5 name="arrow-right" size={24} color="black" style={{paddingRight: 30}}/>
                <Text style={styles.date_day}>10</Text>
                <View>
                  <Text style={styles.date_weekdays}>Thứ 2</Text>
                  <Text style={styles.date_month}>Tháng 8</Text>
                </View>
              </View>
              <View style={styles.person_input}>
                <Text style={styles.person_zoom}>1</Text>
                {/* nếu không có trẻ em thì them paddingLeft vào person_zoom */}
                <Text style={styles.person_type}>Phòng</Text>
                <Text style={styles.person_count}>2</Text>
                <Text style={styles.person_type}>Người lớn</Text>
                <Text style={styles.person_count}>2</Text>
                <Text style={styles.person_type}>Trẻ em</Text>
              </View>
              <View style={styles.button_container}>
              <View style={styles.button}>
              <TouchableWithoutFeedback>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>Tìm Kiếm</Text>
              </TouchableWithoutFeedback>
              </View>
              </View>
            </View>
          </View>
          <View style={styles.cty_container}>
            <View style={styles.city_footer}>
              <Image style={{ height: 50, width: 80}} source={require('../assets/map_maker.jpg')}/>
              <View style={{paddingLeft: 12, paddingTop: 7}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>ĐIỂM ĐẾN HÀNG ĐẦU</Text>
                <Text style={{fontSize: 12, color: 'grey', paddingTop: 5}}>Những thành phố nổi tiếng</Text>
              </View>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin: 10}}>
                <View style={styles.city_scrollView}>
                  <Image style={styles.city_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.city_img_background}>
                     <Text style={styles.city_name}>Hà Nội</Text> 
                     <Text style={styles.city_hotel}>3557 khách sạn</Text> 
                  </View>
                </View>
                <View style={styles.city_scrollView}>
                  <Image style={styles.city_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.city_img_background}>
                     <Text style={styles.city_name}>Hà Nội</Text> 
                     <Text style={styles.city_hotel}>3557 khách sạn</Text> 
                  </View>
                </View>
                <View style={styles.city_scrollView}>
                  <Image style={styles.city_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.city_img_background}>
                     <Text style={styles.city_name}>Hà Nội</Text> 
                     <Text style={styles.city_hotel}>3557 khách sạn</Text> 
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.suggestion_container}>
            <View style={styles.suggestion_footer}>
              <Image style={{ height: 50, width: 80}} source={require('../assets/recommend.jpg')}/>
              <View style={{paddingLeft: 12, paddingTop: 7}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>KHÁCH SẠN QUANH ĐÂY</Text>
                <Text style={{fontSize: 12, color: 'grey', paddingTop: 5}}>Tìm khách sạn quanh đây</Text>
              </View>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin: 10}}>
                <View style={styles.suggestion_first}>
                  <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.suggestion_img_background}>
                    <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
                    </View>
                    <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
                  </View>
                  <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
                    <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
                  </View>
                </View>
                <View style={styles.suggestion_scrollView}>
                  <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.suggestion_img_background}>
                    <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
                    </View>
                    <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
                  </View>
                  <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
                    <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
                  </View>
                </View>
                <View style={styles.suggestion_scrollView}>
                  <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.suggestion_img_background}>
                    <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
                    </View>
                    <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
                  </View>
                  <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
                    <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.suggestion_container}>
            <View style={styles.suggestion_footer}>
              <Image style={{ height: 50, width: 80}} source={require('../assets/recommend.jpg')}/>
              <View style={{paddingLeft: 12, paddingTop: 7}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>KHÁCH SẠN QUANH ĐÂY</Text>
                <Text style={{fontSize: 12, color: 'grey', paddingTop: 5}}>Tìm khách sạn quanh đây</Text>
              </View>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin: 10}}>
                <View style={styles.suggestion_first}>
                  <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.suggestion_img_background}>
                    <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
                    </View>
                    <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
                  </View>
                  <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
                    <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
                  </View>
                </View>
                <View style={styles.suggestion_scrollView}>
                  <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.suggestion_img_background}>
                    <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
                    </View>
                    <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
                  </View>
                  <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
                    <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
                  </View>
                </View>
                <View style={styles.suggestion_scrollView}>
                  <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
                  <View style={styles.suggestion_img_background}>
                    <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
                      <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
                    </View>
                    <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
                  </View>
                  <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
                    <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center'
  },
  scrollView_container: {
    borderTopColor: '#111', 
    borderTopWidth: 0.5
  },
  booking_container: {
    width: wd, 
    height: 300, 
    backgroundColor: '#fafafa'
  },
  booking_padding: {
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10, 
    alignItems: "center"
  },
  booking_footer: {
    fontSize: 12, 
    color: 'grey', 
    paddingLeft: 5
  },
  location_input: {
    paddingTop: 10, 
    paddingBottom: 12,
    paddingLeft: 20, 
    paddingRight: 20, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#111'
  },
  location_input_placeholder: {
    color: 'grey', 
    fontSize: 18, 
    fontWeight: 'bold', 
  },
  date_input: {
    flexDirection: 'row', 
    paddingTop: 15, 
    alignItems: "center",
    paddingBottom: 17,
    paddingLeft: 30, 
    paddingRight: 27, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#111'
  },
  date_day: {
    fontSize: 40, 
    color: '#f60053', 
    fontWeight: 'bold', 
    paddingRight: 5
  },
  date_weekdays: {
    color: 'grey', 
    fontSize: 12
  },
  date_month: {
    fontSize: 15, 
    fontWeight: 'bold'
  },
  person_input: {
    flexDirection: 'row', 
    paddingTop: 10, 
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 12,
    width: 340, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#111'
  },
  person_zoom: {
    fontSize: 30, 
    color: '#111', 
    fontWeight: 'bold', 
    paddingRight: 5
  },
  person_type: {
    fontSize: 15, 
    fontWeight: '400', 
    paddingTop: 10
  },
  person_count: {
    fontSize: 30, 
    color: '#111', 
    fontWeight: 'bold', 
    paddingRight: 5, 
    paddingLeft: 30
  },
  button_container: {
    justifyContent: "center", 
    alignItems: "center",
    height: 90
  },
  button: { 
    width: 190, 
    backgroundColor: '#54d3c2', 
    height: 40,
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cty_container: {
    marginTop: 10, 
    width: wd, 
    height: 200, 
    backgroundColor: '#fff'
  },
  city_footer: {
    flexDirection: 'row', 
    margin: 13, 
    alignItems: "center"
  },
  city_scrollView: {
    marginLeft: 10
  },
  city_img: { 
    height: 100, 
    width: 150, 
    borderRadius: 10
  },
  city_img_background: {
    width: '100%', 
    height: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
    position: 'absolute', 
    borderRadius: 10
  },
  city_name: {
    position: 'absolute', 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16, 
    left: 5, 
    bottom: 23
  },
  city_hotel: { 
    color: 'white', 
    position: 'absolute', 
    left: 5, 
    bottom: 4
  },
  suggestion_container: {
    marginTop: 10, 
    width: wd, 
    height: 410, 
    backgroundColor: '#fff'
  },
  suggestion_first: {
    marginLeft: 10,
    height: 300,
    borderColor: 'grey',
    borderRadius: 12,
    borderWidth: 1,
  },
  suggestion_scrollView: {
    marginLeft: 20,
    height: 300,
    borderColor: 'grey',
    borderRadius: 12,
    borderWidth: 1,
  },
  suggestion_footer: {
    flexDirection: 'row', 
    margin: 10, 
    alignItems: "center"
  },
  suggestion_img: {
      height: 150, 
      width: 240, 
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
  },
  suggestion_name: {
    fontWeight: 'bold', 
    fontSize: 14, 
    bottom: - 10,
    left: 10,
  },
  suggestion_hotel: { 
    left: 5, 
  },
});  