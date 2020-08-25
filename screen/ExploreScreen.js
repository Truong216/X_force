import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView, blurRadius, TextInput } from 'react-native';
import Color from '../components/Color'; 
import { StatusBar } from 'expo-status-bar';

export default function ExploreScreen() {
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView>
                <View style={styles.Img_Background}>
                    <ImageBackground style={styles.background} source={require('../assets/Welcome.jpg')}>
                    </ImageBackground> 
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
      },
    Img_Background: {
        width: '100%',
        height: 500,
      },
      background: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 50,
      },  
})