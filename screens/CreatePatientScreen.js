import React, { useEffect, useCallback, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';


export default function CreatePatientScreen({route}) {
  const { register, handleSubmit, setValue } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = useCallback((formData) => {
    console.log(formData);
    setIsRegistered(true);
    
  }, []);

  const onChangeField = useCallback((name) => (text) => {
    setValue(name, text);
  }, []);

  useEffect(() => {
    register('username');
    register('email');
    register('password');
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ficha Clinica</Text>
      <TextInput
        style={styles.input}
        autoCompleteType="username"
        placeholder="Nombre"
        onChangeText={onChangeField('username')}
      />
      <TextInput
        style={styles.input}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField('email')}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField('password')}
      />
      
      <Button title="Submit" onPress={handleSubmit(onSubmit)} style={styles.submitButton} />
      {isRegistered && <Text style={styles.successText}>Registration successful!</Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20, // Increased margin between boxes
    width: '40%', // Shortened width
  },
  submitButton: {
    padding: 50, // Increased button size
  },
  successText: {
    color: 'green',
    marginTop: 10,
    fontSize: 17,
  },
});

// export default CreatePatientScreen({route})

// export default function CreatePatientScreen({route}) { 
//     let dataObj = route.params
  
//     return ( 
//       <View style={styles.container}> 
//         <Text style={styles.paragraph}> 
//           This is the About Screen of {dataObj.websiteName} 
//         </Text> 
//       </View> 
//     );
//   }


  