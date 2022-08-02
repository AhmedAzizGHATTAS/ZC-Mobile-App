import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject,styles.container]}>  
      <Lottie source={require('../assets/95494-double-loader.json')} autoPlay loop/>
    </View>
  )
}

export default AppLoader

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'rgba(148,170,197,1)'
        backgroundColor:'#2A558C',
    }
})