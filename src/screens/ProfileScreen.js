import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { getCurrentUser } from 'aws-amplify/auth'; // Assuming this is a valid import

export default function ProfileScreen() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { email, userId, signInDetails } = await getCurrentUser();
        setUserDetails({ email, userId, signInDetails });
      } catch (error) {
        console.log('Error fetching user info: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!userDetails) {
    return (
      <View style={styles.container}>
        <Text>No user information available</Text>
      </View>
    );
  }

  // Convert signInDetails JSON object into a readable string format
  const renderSignInDetails = () => {
    if (userDetails.signInDetails) {
      return Object.entries(userDetails.signInDetails).map(([key, value], index) => (
        <Text key={index} style={styles.signInText}>
          {key}: {value}
        </Text>
      ));
    }
    return <Text style={styles.signInText}>No Sign-In Details Available</Text>;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.title}>User Profile</Text>
        <Text style={styles.label}>Email: {userDetails.email}</Text>
        <Text style={styles.label}>User ID: {userDetails.userId}</Text>
        <Text style={styles.label}>Sign-In Details:</Text>
        {renderSignInDetails()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EAF8F5',
  },
  profileCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  signInText: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
    lineHeight: 22,
  },
});
