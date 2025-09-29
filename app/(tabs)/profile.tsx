import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header  from '../../components/Header';
import Profilecard from '@/components/Profilecard';

const profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Header/>
     
      <Profilecard/>
      <Profilecard/>
      <Profilecard/>
      
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default profile

const styles = StyleSheet.create({})