import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import FAQSection from '../components/FAQSection';

export default function LandingPage() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.hero}>
        <Text style={styles.brandTitle}>MysticTxt</Text>
        <Text style={styles.tagline}>Your connection to spiritual guidance</Text>
        <Button title="Get Started - Free" onPress={() => router.push('/(auth)/signup')} />
        <Button title="Sign In" onPress={() => router.push('/(auth)/login')} />
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>2 Free Readings for New Clients</Text>
      </View>

      <FAQSection />

      <View style={styles.advisorLink}>
        <Button title="Advisor Portal" color="#FFD700" onPress={() => router.push('/(legacy)/dashboard')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1c1c1c',
  },
  brandTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  tagline: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  banner: {
    padding: 20,
    backgroundColor: '#4A4A4A',
  },
  bannerText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  advisorLink: {
    marginTop: 30,
    alignItems: 'center',
  },
});
