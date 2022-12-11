import { useState } from "react";
// import React from "react";
import { Image } from "react-native";
import { Button, TextInput } from 'react-native-paper'
import logo from "../assets/gold_shop.jpg";
import HomeStyle from "../style/HomeStyle";
// import logo from "../assets/gold_shop.jpg";
export default function LoginScreen() {
    //hook
    const [phoneNumber, setPhoneNumber] =useState();
    const [password, setPassword] =useState();
    return (
        <>
    
            <Image source={logo} style={HomeStyle.logo}></Image>
            <TextInput
                label="Phone Number"
                keyboardType="number-pad"
                style={{height:'20',width:'80%', }}
                onChangeText={value => setPhoneNumber(value)}
                cursorColor={'black'}
            />
            <TextInput
                label="Password"
                keyboardType="default"
                onChangeText={value => setPassword(value)}
            />
            <Button icon="login" style={HomeStyle.loginBtn} mode="contained-tonal" buttonColor="#FFD700" onPress={()=>console.log("Button Clicked")}>
                Login
            </Button>
        </>
    )
}