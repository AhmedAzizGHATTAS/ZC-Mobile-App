import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ClientList = props => {
  return (
    <View style={styles.clientCard}>
      <View style={{flexDirection: 'row', marginTop: '10%', marginLeft: '8%'}}>
        <Ionicons name="reader-outline" color={'#2A558C'} size={24} />
        <Ionicons
          name="ellipsis-vertical-outline"
          style={{marginLeft: '60%'}}
          color={'grey'}
          size={24}
        />
      </View>
      <View style={{marginTop: '5%'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#2C3540',
            marginLeft: '7%',
          }}>
          {props.data.NAME}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#2A558C',
            marginLeft: '12%',
          }}>
          {Object.values(props.data.PROPERTY_139)[0].replace(/\D/g, '')} €
        </Text>
        <Text style={{marginLeft: '10%', marginTop: '2%', color: '#64758C'}}>
          Détenu par {Object.values(props.data.PROPERTY_151)[0]}
        </Text>
      </View>
    </View>
  );
};

export default ClientList;

const styles = StyleSheet.create({
  clientCard: {
    flex: 1,
    marginLeft: 20,
    width: 170,
    height: 150,
    backgroundColor: '#EAE9F2',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 10,
  },
});
