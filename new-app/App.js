import React from "react";
import { StyleSheet, View, ImageBackground,} from "react-native";
import RegistrationScreen from "./assets/screens/auth/RegistrationScreen";



export default function App() {
  return(
    <View style={styles.container}>
      <ImageBackground 
      source={require('./assets/images/Photo-bg.png')}
      style={styles.image}
      >

      </ImageBackground>
      <RegistrationScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: "cover",
  },
  
});