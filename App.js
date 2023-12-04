import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
 
  return (
    <View style={styles.appContainer}>
       <View style={styles.textBoxContainer}>
              <TextInput style={styles.textBox} placeholder='Your course goal'/>
              <Button title='Add goal'/>
       </View>
       <View>
            <Text>List of goal...</Text>
       </View>
    </View>
  );
}


const styles = StyleSheet.create({
    appContainer:{
      padding: 50,
    },
    textBoxContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textBox:{
      borderWidth: 2,
      borderColor: '#cccccc',
      width: '80%',
      paddingHorizontal: 10,
      marginRight: 8,
    }
});
