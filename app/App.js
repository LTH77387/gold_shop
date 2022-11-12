import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import styles from './style/ContainerStyle';
//screen
import HomeScreen from './screen/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#467ca4" />
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
        </Switch>
      </NativeRouter>
    </View>
  );
}


