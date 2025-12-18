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
import { useCreatUser } from '../servis/user/mutation';

export default function SignupScreen() {
  const [secure, setSecure] = useState(true);
  const [agree, setAgree] = useState(false);
 const creatUser=useCreatUser();
  return (
    <LinearGradient
    colors={[ "#eaf6ff","#ffffff","#a6d8ff"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>

        {/* Title */}
        <Text style={styles.title}>Join us to start searching</Text>
        <Text style={styles.subtitle}>
          You can search course, apply course and find scholarship for abroad studies
        </Text>

        {/* Inputs */}
        <View style={styles.inputBox}>
          <TextInput placeholder="Name" style={styles.input} />
        </View>

        <View style={styles.inputBox}>
          <TextInput placeholder="Email" style={styles.input} />
        </View>

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

        {/* Terms */}
        <TouchableOpacity
          style={styles.terms}
          onPress={() => setAgree(!agree)}
        >
          <View style={[styles.checkbox, agree && styles.checked]} />
          <Text style={styles.termsText}>
            I agree with the Terms of Service & Privacy Policy
          </Text>
        </TouchableOpacity>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={()=>router.push("./(tabs)/doctors")}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Login */}
        <Text style={styles.loginText}>
        <TouchableOpacity onPress={()=>router.push("./login")}>
         
          
          <Text style={styles.loginLink}> Log in</Text>
          </TouchableOpacity>
        </Text>

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
  
    terms: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
    },
  
    checkbox: {
      width: 18,
      height: 18,
      borderRadius: 9,
      borderWidth: 1,
      borderColor: '#bbb',
      marginRight: 10,
    },
  
    checked: {
      backgroundColor: '#0A84FF',
      borderColor: '#0A84FF',
    },
  
    termsText: {
      fontSize: 12,
      color: '#6b7c93',
      flex: 1,
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
  
    loginText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 14,
      color: '#6b7c93',
    },
  
    loginLink: {
      color: '#0A84FF',
      fontWeight: '600',
    },
  });
  