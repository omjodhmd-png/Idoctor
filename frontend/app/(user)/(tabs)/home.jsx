import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAllDoctors } from "../../../servis/doctor/qurey.js";

export default function HomeScreen() {
  const { data, isLoading, isError } = useGetAllDoctors();

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
        <Text style={styles.hello}>Hi Handwerker!</Text>
        <Text style={styles.title}>Find Your Doctor</Text>
      </View>

      {/* Doctors Grid */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        contentContainerStyle={{ padding: 8 }}
        columnWrapperStyle={{ justifyContent: "space-between" }} // فرق بين الأعمدة
        renderItem={({ item }) => (
         
          <TouchableOpacity style={styles.card}>
            {item.imageUrl && (
              <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
            )}
            <Text style={styles.cardName}>{item.fullName}</Text>
            <Text style={styles.cardJob}>{item.speciality}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },

  header: {
    paddingTop: 50,
    backgroundColor: "#0A84FF",
    padding: 24,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 8,
  },
  hello: { color: "#EAF2FF", fontSize: 14 },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold", marginTop: 5 },

  card: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 4,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    elevation: 3,
  },
  cardImage: {
    width: 150,
    height: 200,
    borderRadius:10,
    marginBottom: 8,
  },
  cardName: { fontWeight: "bold", fontSize: 16, textAlign: "center" },
  cardJob: { fontSize: 14, color: "#555", textAlign: "center", marginTop: 4 },
});
