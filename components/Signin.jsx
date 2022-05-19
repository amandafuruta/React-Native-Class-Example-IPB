import React, { Component } from "react";
import { View, TextInput, Text, Button } from "react-native";
import styles from "../styles/login";


const userList = [
    {
        id: 1,
        username: "Sj",
        password: "Sj",
        name: "Steve Jobs",
        description: "Here some description about me",
        email: "stevejobs@apple.com",
        number: "800-692-7753",
        photo: require("../assets/users/steve.jpeg")
    },
    {
        id: 2,
        username: "bg",
        password: "bg",
        name: "Bill Gates",
        description: ".dasd..",
        email: "billgates@microsoft.com",
        number: "XYZ-692-7753",
        photo: require("../assets/users/bill.jpg")
    }
]

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    setStateFor = (key, val) => {
        this.setState({
            [key]: val,
        })
    }

    verifyUser = () => {
        const user = userList.find((x) =>
            x.username === this.state.username &&
            x.password === this.state.password
        )

        if (user !== undefined) {
            this.props.navigation.navigate("App", { user: user });
        }

        else {
            console.log("Invalid user");
        }
    }

    render() {
        return (
            <View style={styles.layer2}>
                <Text style={styles.header}>Sign In</Text>
                <TextInput style={styles.input} placeholder="Username" onChangeText={(value) => this.setStateFor("username", value)} />
                <TextInput style={styles.input} placeholder="Password" onChangeText={(value) => this.setStateFor("password", value)} secureTextEntry/>
                <Button title="Submit" style={styles.input} onPress={this.verifyUser}></Button>
            </View>
        )
    }
}

export default SignIn;