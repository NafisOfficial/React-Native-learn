import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [titleText,setTitleText]=useState("Hello world");

  const onPressChange = () =>{
    setTitleText("Pressed");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText} onPress={onPressChange}>{titleText}</Text>
      <Text style={styles.subtext}>Another piece of text components</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color:'white',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor:"blue"
  },
  subtext:{
    fontSize: 12,
  }
});
