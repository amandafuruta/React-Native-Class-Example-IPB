import React, { useState, useEffect } from "react"
import { Image, View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/home'

const Home = ( props ) => {
     const [ getValueName, setGetName ] = useState("")
     const [ getValueCity, setGetCity ] = useState("")

     const getData = async() => {
        AsyncStorage.getItem("name").then( (value) => setGetName(value) )
        AsyncStorage.getItem("city").then( (value) => setGetCity(value) )
     }

     useEffect(() => {
         getData()
     }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Hi { getValueName } from {getValueCity}</Text>
            <Image
                style={styles.img}
                source={require("../assets/logo.png")}
            />
        </View>
    )
}

export default Home;