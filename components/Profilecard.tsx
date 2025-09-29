import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Image} from 'expo-image';
import { BlurView } from "expo-blur";


const Profilecard = () => {
  return (
   
    <BlurView style={styles.glass} intensity={30} tint="light">
      <Image
      source={{uri:"https://images.unsplash.com/photo-1758751945250-b1bb1d6caeee?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
      style={{width:100, height:100, borderRadius:100}}/>

      <View style={{flexDirection:"column" , gap:10}}>
      <Text>
        Name :
      </Text>
      <Text>
        Class:
      </Text>
      <Text>
       Age:
      </Text>
      </View>

    </BlurView>
    
  )
}

export default Profilecard

const styles = StyleSheet.create({

    glass: {
        flexDirection:'row',
        gap:40,
        marginTop:20,
        height:200,
        width: '100%',
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(67, 62, 62, 0.3)",
        overflow: "hidden",
}
})
