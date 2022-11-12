import React from "react";
import { Text,Image,View,Button } from "react-native";
import styles from "../style/ContainerStyle";
export default function HomeScreen(){
    return(
        <>
       
       <View>
       {/* <Image
        style={styles.logo}
        source={{
          uri: 'https://celenew.com/quotes/278372646_526677825470043_3780349212478201568_n.jpeg',
        }}
      /> */}
      <Image source={require('../assets/gold_shop.jpg')} style={styles.logo}></Image> 
     
       </View>
       <Text style={styles.gold_shop_text}>Gold Shop</Text>
   
    <View style={styles.view_bottom}>
    <Button title="Login" style={styles.login_button} color="#141313"></Button>
    
    </View>
   
        </>

)
}
// const HomeScreen=()=>{
//     <>
//     <Text>
//         Welcome!
//     </Text>
//     </>
// }
// export default HomeScreen;