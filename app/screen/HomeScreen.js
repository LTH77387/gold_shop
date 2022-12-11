import React from "react";
import { Text, Image } from "react-native";
import {Button} from 'react-native-paper'
import logo from "../assets/gold_shop.jpg";
import HomeStyle from "../style/HomeStyle";
// import { useHistory } from "react-router-dom";
// let history= useHistory();
// const history = useHistory();
// import ButtonComponent from "../component/ButtonComponent";
export default function HomeScreen({history}) {

    return (
        
        <>
      
            <Image source={logo} style={HomeStyle.logo}></Image>
            <Text style={HomeStyle.welcomeText}>မင်္ဂလာပါ🙏 {'\n'} ကိုအောင်ရွှေဆိုင်မှကြိုဆိုပါသည်။ ဆော့ဖ်ဝဲအသုံးပြုရန်အတွက် လော့ဂင် ဝင်ပါ။</Text>        
            <Button icon="login" style={HomeStyle.loginBtn} mode="contained-tonal" buttonColor="#FFD700" onPress={()=>history.push("/login")}>
        Login
    </Button>
        </>
    )
}