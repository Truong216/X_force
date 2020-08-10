import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
export default function LogoTitle() {
    return (
      <View style={styles.header_custom}>
        <View  style={styles.header_title}>
          <Text style={{fontWeight: '400', fontSize: 16}}>Hồ Chí Minh</Text>
        </View>
        <View style={styles.header_info}>
          <Text style={{fontSize: 12, fontWeight: '400',}}>05/08 - 06/08 * 1 khách * 10 phòng</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
header_custom: {
    flex: 1,
    width: 210,
    height: 43,
    alignItems: "center"
  },
  header_title: {
    justifyContent: 'center',
    flex: 0.5,
  },
  header_info: {
    justifyContent: 'center',
    flex: 0.5,
  },
});
  