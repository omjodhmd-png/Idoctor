import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#0A84FF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
        

          return <Ionicons size={size} color={color} />;
        },
        headerShown: false,
      })}
    />
  );
}
