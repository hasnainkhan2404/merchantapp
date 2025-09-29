
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'




import { Image } from 'expo-image';

const Header = () => {
  return (
    <>
          <View style={{alignItems:'flex-end' }}>
              <Image
              source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
              style={{ width: 50, height:50 , marginTop:20, marginLeft:20 , borderRadius:100}}
              contentFit='cover'/>
        
              </View>
              <View style={styles.titleContainer}>
              <Text style={{fontSize:18,  marginLeft:20, marginTop:20}}>Explore</Text>
              <Text style={{fontSize:27, fontWeight:'bold', marginLeft:20, marginTop:20}}>Explore</Text>
              <Text style={{fontSize:18,  marginLeft:20, marginTop:20}}>Explore</Text>
              </View>
              </>
  )
}

const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      marginTop:20,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between'
     
    },
  });

export default Header