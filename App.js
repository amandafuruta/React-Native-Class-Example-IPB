import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";
import React, { Component } from "react";
import { Button, Text, View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

// import styles file
import styles from "./styles/main";


import PostsComponent from "./components/Posts";
import PostComponent from "./components/Post";
import CommentsComponent from "./components/Comments";
import HomeComponent from "./components/Home";
import ProfileComponent from "./components/Profile";
import ContactsComponent from "./components/Contact";
import LoginComponent from "./components/Signin";
import SettingsComponent from './components/Settings'

import { AuthContext } from "./context/AuthContext";


function HomeScreeen({ navigation }) {
  return <HomeComponent navigation={navigation} />;
}

function PostsScreeen({ navigation }) {
  return <PostsComponent navigation={navigation} />;
}

function PostScreeen({ navigation, route }) {
  return <PostComponent navigation={navigation} route={route} />;
}

function CommentsScreeen({ navigation, route }) {
  return <CommentsComponent navigation={navigation} route={route}/>;
}

function ProfileScreeen({ navigation }) {
  return <ProfileComponent navigation={navigation} />;
}

function ContactsScreen({ navigation }) {
  return <ContactsComponent navigation={navigation} />;
}

function SettingsScreen({ navigation }) {
  return <SettingsComponent navigation={navigation} />;
}

function LoginScreen({ navigation }) {
  return <LoginComponent navigation={navigation} />;
}

const StackAuth = createStackNavigator();

function NavAuth(logged) {
  return (
    <StackAuth.Navigator
      initialRouteName={logged ? "App" : "SignIn"}
      screenOptions={{
        headerShown: false,
        headerStyle: styles.headerBG,
        headerTintColor: "#eee",
        headerTitleStyle: styles.headerBold,
      }}
    >
      {/* <StackAuth.Screen
        name="Home"
        component={HomeScreeen}
        options={{ title: "Blog" }}
      /> */}
      <StackAuth.Screen name="SignIn" component={LoginScreen} />
      <StackAuth.Screen name="App" component={NavTab} />
    </StackAuth.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function NavTab(props) {
  const { user } = props.route.params;
  return (
    <AuthContext.Provider value={user}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Blog") {
              iconName = focused ? "md-list" : "md-list";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person";
            } else if (route.name === "Contacts") {
              iconName = focused ? "ios-send" : "ios-send";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          activeTintColor: "steelblue",
          inactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreeen} />
        <Tab.Screen name="Blog" component={NavBlog} />
        <Tab.Screen name="Profile" component={ProfileScreeen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />

      </Tab.Navigator>
    </AuthContext.Provider>
  );
}

const Stack = createStackNavigator();

function NavBlog() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: styles.headerBG,
        headerTintColor: '#eee',
        headerTitleStyle: styles.headerBold
      }}
    >
      <Stack.Screen name="Home" component={PostsScreeen} options={{title: "Blog"}} />
      <Stack.Screen name="Post" component={PostScreeen} />
      <Stack.Screen name="Comments" component={CommentsScreeen} />
    </Stack.Navigator>
  )
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <NavigationContainer style={styles.maincontainer}>
        {NavAuth(this.context.isLogged)}
      </NavigationContainer>
    )
  }
}

App.contextType = AuthContext;

export default App;
