import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.hello}>Hi Handwerker!</Text>
                    <Text style={styles.title}>Find Your Doctor</Text>
                </View>

                {/* Categories */}
                <View style={styles.categories}>
                    <Category icon="medkit" color="#6C63FF" />
                    <Category icon="heart" color="#2ECC71" />
                    <Category icon="eye" color="#F5A623" />
                    <Category icon="happy" color="#FF5A5F" />
                </View>

                {/* Popular Doctor */}
                <Section title="Popular Doctor" />

                <View style={styles.cardRow}>
                    <DoctorCard
                        name="Dr. Fillerup Grab"
                        job="Medicine Specialist"
                        // image={require('../assets/doctor1.png')}
                    />
                    <DoctorCard
                        name="Dr. Blessing"
                        job="Dentist Specialist"
                        // image={require('../assets/doctor2.png')}
                    />
                </View>

                {/* Feature Doctor */}
                <Section title="Feature Doctor" />

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <FeatureDoctor
                        name="Dr. Crick"
                        price="$25.00/hour"
                        // image={require('../assets/doctor3.png')}
                    />
                    <FeatureDoctor
                        name="Dr. Strain"
                        price="$22.00/hour"
                        // image={require('../assets/doctor4.png')}
                    />
                </ScrollView>

            </ScrollView>
        </SafeAreaView>
    );
}

/* ---------- Components ---------- */

const Category = ({ icon, color }) => (
    <View style={[styles.category, { backgroundColor: color }]}>
        <Ionicons name={icon} size={24} color="#fff" />
    </View>
);

const Section = ({ title }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.seeAll}>See all</Text>
    </View>
);

const DoctorCard = ({ name, job, image }) => (
    <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardJob}>{job}</Text>
    </View>
);

const FeatureDoctor = ({ name, price, image }) => (
    <View style={styles.featureCard}>
        <Image source={image} style={styles.featureImage} />
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
    </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },

    header: {
        backgroundColor: '#0A84FF',
        padding: 24,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    hello: {
        color: '#EAF2FF',
        fontSize: 14,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
    },

    categories: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    category: {
        width: 55,
        height: 55,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#0A84FF',
    },

    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },

    card: {
        backgroundColor: '#fff',
        width: 160,
        borderRadius: 18,
        padding: 12,
        alignItems: 'center',
        elevation: 4,
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    cardName: {
        fontWeight: 'bold',
        marginTop: 8,
    },
    cardJob: {
        fontSize: 12,
        color: '#777',
    },

    featureCard: {
        backgroundColor: '#fff',
        width: 140,
        marginLeft: 20,
        borderRadius: 18,
        padding: 12,
        alignItems: 'center',
    },
    featureImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    price: {
        color: '#0A84FF',
        marginTop: 4,
        fontWeight: '600',
    },
});
