import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { ScrollView } from 'react-native-gesture-handler'


const index = () => {
  return (
    <SafeAreaView >

    <ScrollView style={styles.scrollHeader} horizontal={true} >
    <View style={styles.maincontainer}>
      <Text style={styles.headertext}>Index</Text>
       </View>
    <View style={styles.maincontainer}>
      <Text style={styles.headertext}>Index</Text>
       </View>
    <View style={styles.maincontainer}>
      <Text style={styles.headertext}>Index</Text>
       </View>
    <View style={styles.maincontainer}>
      <Text style={styles.headertext}>Index</Text>
       </View>
    </ScrollView>


    <View>

    <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={{ width: 50, height: 50 }} />

    </View>
  
    
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollHeader:{
    width:100,
    
  },
  maincontainer: {
    width:50,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  headertext:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
})