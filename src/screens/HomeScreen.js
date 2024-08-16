import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signOut } from 'aws-amplify/auth';
import myFarmImage from '../assets/myfarm.png';

export default function HomeScreen({ navigation }) {

  async function handleSignOut() {
    try {
      await signOut();
      Alert.alert('You have been signed out.');
      navigation.navigate('Main'); // Navigate back to the sign-in screen
    } catch (error) {
      console.log('Error signing out: ', error);
      Alert.alert('Error signing out:', error.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Oakdale Ranch</Text>
        <Text style={styles.subHeaderText}>18°C | Cloudy</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage your fields</Text>
        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <Image
              source={myFarmImage} // Correct image path
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>My Farm</Text>
          </View>
          <View style={styles.gridItem}>
            <Image
              source={require('../assets/crops.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Crops</Text>
          </View>
          {/* Add more grid items here as needed */}
        </View>
      </View>

      {/* Sign Out Button */}
      <View style={styles.signOutContainer}>
        <Button
          title="Sign Out"
          buttonStyle={styles.signOutButton}
          onPress={handleSignOut}
          icon={<Icon name="sign-out" size={15} color="white" />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#EAF8F5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#888',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    width: '48%', // Takes up roughly half of the available width
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
  },
  signOutContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
});
