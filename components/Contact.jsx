import React, { Component } from "react";
import { View, TextInput, Text, Button } from "react-native";
import styles from "../styles/contacts";
export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.layer2}>
                <Text style={styles.header}>Contact Form</Text>
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Password" />
                <TextInput style={styles.input_large} placeholder="Message" multiline numberOfLines={4}/>
                <Button title="Submit" style={styles.input} ></Button>
            </View>
        )
    }
}