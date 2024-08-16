import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signOut } from 'aws-amplify/auth';
import myFarmImage from '../assets/myfarm.png';

export default function HomeScreen({ navigation }) {

  

  const farms = [
    {
      name: 'Sunnydale Farm',
      address: '123 Sunshine St, Sunnyville',
      area: '50 acres',
      image: myFarmImage,
    },
    {
      name: 'Green Acres',
      address: '456 Greenway Blvd, Greenfield',
      area: '120 acres',
      image: require('../assets/crops.png'),
    },
    {
      name: 'Riverbend Farm',
      address: '789 River Rd, Riverdale',
      area: '85 acres',
      image: myFarmImage,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage your fields</Text>
        <View style={styles.gridContainer}>
          {farms.map((farm, index) => (
            <Card key={index} containerStyle={styles.gridItem}>
              <Image source={farm.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{farm.name}</Text>
              <Text style={styles.cardDetail}>{farm.address}</Text>
              <Text style={styles.cardDetail}>{farm.area}</Text>
            </Card>
          ))}
        </View>
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
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
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
