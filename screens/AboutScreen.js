import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function AboutScreen({route}) { 
    let dataObj = route.params
  
    return ( 
      <View style={styles.container}> 
        <Text style={styles.paragraph}> 
          This is the About Screen of {dataObj.websiteName} 
        </Text> 
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
  