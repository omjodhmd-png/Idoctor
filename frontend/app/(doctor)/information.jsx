import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCreateDoctor } from "../../servis/doctor/mutation";

export default function DoctorInfoScreen() {
  const [fullName, setFullName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [bio, setBio] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const createDoctor = useCreateDoctor();


  const handleSubmit = () => {
    createDoctor.mutate(
      {
        fullName,
        speciality,
        bio,
        workTime,
        phone,
        address,
        price,
      },
      {
        onSuccess: () => {
          alert("Doctor profile created");
          router.replace("/(tabs)/home");
        },
        onError: (error) => {
          alert(error.message);
        },
      }
    );
 

    router.replace("./(tabs)/profile");
  };

  return (
    <LinearGradient
      colors={["#eaf6ff", "#ffffff", "#a6d8ff"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Title */}
          <Text style={styles.title}>Doctor Information</Text>
          <Text style={styles.subtitle}>
            Complete your profile to start receiving patients
          </Text>

          {/* Full Name */}
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Speciality */}
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Speciality"
              style={styles.input}
              value={speciality}
              onChangeText={setSpeciality}
            />
          </View>

          {/* Bio */}
          <View style={[styles.inputBox, { height: 90 }]}>
            <TextInput
              placeholder="Bio"
              style={styles.input}
              value={bio}
              onChangeText={setBio}
              multiline
            />
          </View>

          {/* Work Time */}
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Work Time (ex: 09:00 - 17:00)"
              style={styles.input}
              value={workTime}
              onChangeText={setWorkTime}
            />
          </View>

          {/* Phone */}
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Phone"
              style={styles.input}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* Address */}
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Address"
              style={styles.input}
              value={address}
              onChangeText={setAddress}
            />
          </View>

          {/* Price */}
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Consultation Price (MAD)"
              style={styles.input}
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
          </View>

          {/* Submit */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save Information</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginTop: 30,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7c93",
    marginBottom: 30,
  },

  inputBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    justifyContent: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e6eaf0",
  },

  input: {
    fontSize: 15,
    color: "#000",
  },

  button: {
    backgroundColor: "#0A84FF",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
