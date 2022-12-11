// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NativeRouter, Route, Switch } from "react-router-native";
// import styles from './style/ContainerStyle';
// import LoginScreen from './screen/LoginScreen';
// //screen
// import HomeScreen from './screen/HomeScreen';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" backgroundColor="#467ca4" />
//       <NativeRouter>
//         <Switch>
//           <Route exact path="/" component={HomeScreen}></Route>
//           <Route exact path="/login" component={LoginScreen}></Route>
//         </Switch>
//       </NativeRouter>
//     </View>
//   );
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import theme from './theme/theme';
//screen
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/login" component={LoginScreen}></Route>
        </Switch>
      </NativeRouter>
    </View>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

