import React, {useState, useEffect,useContext} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoader from '../component/AppLoader';
import { AuthContext } from '../component/AuthContext';
import {Facture_URL,img} from '../config';
export default function FirstPage() {
  const [data, setData] = useState([]);
  const {loginPending,setLoginPending} = useContext(AuthContext);
  const getFacture = async () => {
    setLoginPending(true)
    try {
      const response = await fetch(
        Facture_URL,
      );
      const json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setLoginPending(false)
    }, 900);
    
  };
  useEffect(() => {
    getFacture();
  }, []);

  const displayName = () => data.map(item => item.NAME);

  const displayPrice = () => {
    let array = data.map(item => item.PROPERTY_139);
    let x = [];
    for (let i = 0; i < array.length; i++) {
      x.push(Object.values(array[i])[0].replace(/\D/g, '')); //i took the replace from a blog in bobbyhadz.com
    }
    return x;
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#2A558C" barStyle="dark-content" />
        <View style={styles.body}>
          <Image
            source={{uri: img}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={80}
          />
          <View style={styles.topSection}>
            <Ionicons
              style={{top: '-14%', right: '43%'}}
              name="list-outline"
              color={'white'}
              size={28}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 40,
                right: '29%',
                top: '-10%',
              }}>
              Zedney
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 40,
                right: '20%',
                top: '-10%',
              }}>
              App mobile
            </Text>
          </View>
          <ScrollView>
            <View>
              <Text
                style={{
                  color: '#2A558C',
                  fontSize: 23,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                Voici la somme des factures{' '}
              </Text>
            </View>
            <View style={styles.lineChart}>
              <LineChart
                data={{
                  labels: ['test1', 'test2', 'test3', 'test4', 'test5','test6'],
                  // labels:displayName(),
                  datasets: [
                    {
                      // data: displayPrice(),
                      data: [350, 420, 550, 380, 420,312],
                    },
                  ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisLabel="€"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: 'white',
                  backgroundGradientFrom: '#6997BF',
                  backgroundGradientTo: '#A3B4BF',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
            <View style={styles.about}>
              <Text style={styles.aboutTitle}>About</Text>
              <Text style={styles.aboutP}>
                Une société de services d’ingénierie informatique (SSII) fondée
                en 2011 et présente en Tunisie, France et le Moyen Orient (
                L'Arabie Saudite).Depuis notre création, nous avons de cesse de
                développer nos compétences dans le but de proposer des services
                innovants à mêmes d’anticiper l’évolution de vos besoins
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      {loginPending ? <AppLoader/>: null}
    </>
  );
}

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: '#2A558C',
    alignItems: 'center',
    justifyContent: 'center',
    height: '26%',
    borderBottomLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 20,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomSection: {
    width: '100%',
    height: '70%',
  },
  sousTitre: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: '5%',
  },
  nombreDeFact: {
    fontWeight: 'normal',
    fontSize: 15,
    marginLeft: '10%',
    marginTop: '2%',
  },
  about: {
    marginBottom: '10%',
    marginTop: '15%',
    marginLeft: 10,
  },
  aboutTitle: {
    color: '#2A558C',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -10,
  },
  aboutP: {
    color: 'black',
    marginBottom: '10%',
  },
});
