import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [secure, setSecure] = useState(true);

  return (
    <LinearGradient
    colors={["#eaf6ff", "#ffffff", "#a6d8ff"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>

        {/* Title */}
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Login to continue and access your account
        </Text>

        {/* Email Input */}
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Password"
            secureTextEntry={secure}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setSecure(!secure)}
          >
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>router.push("./register")}>
        <Text style={styles.signupText}>
          Don't have an account?
          <Text style={styles.signupLink}> Sign up</Text>
        </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
      justifyContent: 'center',
    },
  
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
    },
  
    subtitle: {
      fontSize: 14,
      color: '#6b7c93',
      marginBottom: 30,
    },
  
    inputBox: {
      backgroundColor: '#fff',
      borderRadius: 12,
      paddingHorizontal: 15,
      height: 55,
      justifyContent: 'center',
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#e6eaf0',
    },
  
    input: {
      fontSize: 15,
      color: '#000',
    },
  
    eye: {
      position: 'absolute',
      right: 15,
    },
  
    button: {
      backgroundColor: '#0A84FF',
      height: 55,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
    },
  
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  
    signupText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 14,
      color: '#6b7c93',
    },
  
    signupLink: {
      color: '#0A84FF',
      fontWeight: '600',
    },
  });
  