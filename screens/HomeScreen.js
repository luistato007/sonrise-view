import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function HomeScreen({navigation}) { 

    const data = { websiteName: "Sonrise" }

    return ( 
      <View style={styles.container}> 
        <Text style={styles.paragraph}> Menu </Text> 
        <Button 
          title="Agregar Paciente" 
          onPress={() => navigation.navigate('AboutScreen', data)} 
        /> 
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
  });
  