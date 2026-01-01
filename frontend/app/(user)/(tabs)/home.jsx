import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import useFavoriteStore from "../../../stor/favorite-store";
import { useGetAllDoctors } from "../../../servis/doctor/qurey.js"

const { width } = Dimensions.get("window");

// Icons لكل speciality
const categoryIcons = {
  Cardiologist: "heart-pulse",
  Dermatologist: "face-man-profile",
  Dentist: "tooth-outline",
  Gynecologist: "head-cog-outline",
  Orthopedic: "bone",
  Pediatrician: "baby-face",
};




export default function HomeScreen() {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // جلب doctors حسب category
  const { data: doctors, isLoading, isError } = useGetAllDoctors(selectedCategory);

  const categories = Object.keys(categoryIcons);

  if (isLoading)
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );

  if (isError)
    return (
      <View style={styles.center}>
        <Text>Error fetching doctors.</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hi,</Text>
          <Text style={styles.title}>Find Your Doctor</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.sectionContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          {categories.map((item) => {
            const isSelected = selectedCategory === item;
            return (
              <TouchableOpacity
                key={item}
                style={styles.categoryItem}
                onPress={() =>
                  setSelectedCategory(isSelected ? null : item)
                }
              >
                <View
                  style={[
                    styles.iconBox,
                    isSelected && styles.iconBoxActive,
                  ]}
                >
                  <MaterialCommunityIcons
                    name={categoryIcons[item]}
                    size={32}
                    color={isSelected ? "#fff" : "#0A84FF"}
                  />
                </View>
                <Text style={{ marginTop: 4, fontSize: 12, color: "#333" }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Doctors List */}
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={styles.sectionTitle}>
          {selectedCategory ? `${selectedCategory} Specialists` : "All Doctors"}
        </Text>

        <FlatList
          data={doctors || []}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const isFav = favorites.includes(item.id);
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  router.push({
                    pathname: "/doctor/[id]",
                    params: { id: item.id },
                  })
                }
              >
                <TouchableOpacity
                  onPress={() => toggleFavorite(item.id)}
                  style={styles.favoriteBadge}
                >
                  <Ionicons
                    name={isFav ? "heart" : "heart-outline"}
                    size={20}
                    color={isFav ? "#FF3B30" : "#aaa"}
                  />
                </TouchableOpacity>

                {item.imageUrl ? (
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.cardImage}
                  />
                ) : (
                  <View style={[styles.cardImage, styles.placeholderImage]}>
                    <Ionicons name="person" size={40} color="#ccc" />
                  </View>
                )}

                <View style={styles.cardInfo}>
                  <Text style={styles.cardName} numberOfLines={1}>
                    {item.fullName}
                  </Text>
                  <View style={styles.cardSpecialityRow}>
                    <MaterialCommunityIcons
                      name={categoryIcons[item.speciality] || "doctor"}
                      size={14}
                      color="#0A84FF"
                    />
                    <Text style={styles.cardJob}>{item.speciality}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

// ====== Styles ======
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FC" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },

  header: {
    backgroundColor: "#0A84FF",
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  hello: { color: "#D1E5FF", fontSize: 14 },
  title: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  notificationBtn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 12,
  },

  sectionContainer: { marginVertical: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    marginLeft: 10,
  },

  categoriesList: { paddingHorizontal: 15 },
  categoryItem: { alignItems: "center", marginRight: 15 },
  iconBox: {
    backgroundColor: "#fff",
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconBoxActive: { backgroundColor: "#0A84FF" },

  card: {
    backgroundColor: "#fff",
    width: width / 2 - 20,
    margin: 10,
    borderRadius: 20,
    padding: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  favoriteBadge: {
    position: "absolute",
    right: 12,
    top: 12,
    zIndex: 1,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 5,
    borderRadius: 10,
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderRadius: 15,
    marginBottom: 10,
  },
  placeholderImage: {
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  cardInfo: { paddingHorizontal: 4 },
  cardName: { fontWeight: "bold", fontSize: 15, color: "#333" },
  cardSpecialityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  cardJob: { fontSize: 12, color: "#777", marginLeft: 4 },
});
