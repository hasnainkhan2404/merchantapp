import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (

    <SafeAreaView>

      <Header />

      <ScrollView contentContainerStyle={styles.titleContainer} >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: 20 }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{ width: 130, height: 150, marginTop: 20, marginLeft: 20, borderRadius: 10 }}
            contentFit='cover' />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{ width: 130, height: 150, marginTop: 20, marginLeft: 20, borderRadius: 10 }}
            contentFit='cover' />

        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: 20 }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{ width: 290, height: 180, marginTop: 20, marginLeft: 20, borderRadius: 10 }}
            contentFit='cover' />
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: 20 }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{ width: 90, height: 150, marginTop: 20, marginLeft: 10, borderRadius: 10 }}
            contentFit='cover' />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{ width: 90, height: 150, marginTop: 20, marginLeft: 10, borderRadius: 10 }}
            contentFit='cover' />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{ width: 90, height: 150, marginTop: 20, marginLeft: 10, borderRadius: 10 }}
            contentFit='cover' />

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
 
  titleContainer: {
    padding:2,
    gap:2,
    flexDirection: 'column',
    alignItems:'center'
   

  },
});
