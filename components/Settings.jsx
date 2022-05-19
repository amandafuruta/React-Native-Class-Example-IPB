import React , { useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, TextInput, View, Text } from 'react-native'

import styles from '../styles/settings'

const Settings = ({ navigation }) => {
    const [ textInputName, setTextInputName ] = useState("")
    const [ textInputCity, setTextInputCity ] = useState("")

    const storeData = async() => {
        
        if( textInputName && textInputCity ){

            await AsyncStorage.setItem( 'name', textInputName )
            await AsyncStorage.setItem( 'city', textInputCity )
            alert( "Settings saved" )
            
        } else {
            
            alert( "Please fill the data" )
            
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <TextInput
                placeholder="Name"
                value={textInputName}
                onChangeText={(data) => setTextInputName(data)}
                style={styles.input_text}
            />
            <TextInput
                placeholder="City"
                value={textInputCity}
                onChangeText={(data) => setTextInputCity(data)}
                style={styles.input_text}
            />

            <Button title="Save" onPress={storeData} style={styles.input_text}/>
        </View>
    )
}
export default Settings;