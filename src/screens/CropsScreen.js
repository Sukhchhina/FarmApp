import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';

export default function CropsScreen() {
  const crops = [
    {
      name: 'Wheat',
      type: 'Grain',
      area: '25 acres',
      image: require('../assets/wheat.png'), // Use your own image
    },
    {
      name: 'Corn',
      type: 'Grain',
      area: '30 acres',
      image: require('../assets/corn.png'), // Use your own image
    },
    {
      name: 'Tomatoes',
      type: 'Vegetable',
      area: '15 acres',
      image: require('../assets/tomato.png'), // Use your own image
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crops</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage your crops</Text>
        <View style={styles.gridContainer}>
          {crops.map((crop, index) => (
            <Card key={index} containerStyle={styles.gridItem}>
              <Image source={crop.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{crop.name}</Text>
              <Text style={styles.cardDetail}>Type: {crop.type}</Text>
              <Text style={styles.cardDetail}>Area: {crop.area}</Text>
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
    width: '48%', 
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
});
