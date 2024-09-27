import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
         <View style={styles.illustration}>
        <Image
          source={require('../assets/welcome image.png')} // Replace with your illustration path
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Discover Your Dream Job Here</Text>
      <Text style={styles.subtitle}>Explore all existing job roles based on your interest and study major</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
      illustration: {
        marginBottom: 50,
      },
      image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        width: '48%',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
      },
    });
export default WelcomeScreen;
