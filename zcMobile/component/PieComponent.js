// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import {PieChart} from 'react-native-chart-kit';
// export default function PieComponent(props){
//   const pieData = [
//     {
//       name: 'Réglée',
//       etat: 3,
//       color: '#4973F2',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'non Réglée',
//       etat: 2,
//       color: '#F2911B',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//   ];
//   const non_repet_val = 
//    props.data.map(n => {
//       return Object.values(n.PROPERTY_151)[0];
//     })
//     .filter((v, i, a) => a.indexOf(v) === i);
//   useEffect(() => {
//     console.log(non_repet_val);
//   }, []);
//   return (
//     <View>
//       <Text>PieChart</Text>
//       <View style={styles.pie}>
//         <PieChart
//           data={pieData}
//           width={Dimensions.get('window').width}
//           height={220}
//           chartConfig={{
//             decimalPlaces: 2, // optional, defaults to 2dp
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             propsForDots: {
//               r: '6',
//               strokeWidth: '2',
//               stroke: '#ffa726',
//             },
//           }}
//           accessor={'etat'}
//           center={[10, 10]}
//           // absolute
//         />
//       </View>
//     </View>
//   );
// };



// const styles = StyleSheet.create({});
