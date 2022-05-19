import React from "react";

import { View, Text, Image } from "react-native";
// import styles file
import styles from "../styles/profile";

import { AuthContext } from '../context/AuthContext'

const Profile = () => {
  return (

    <AuthContext.Consumer>

      {(user) => (

        <View style={styles.main}>
          <View style={styles.layer1}>

            <Image
              style={styles.img}
              source={user.photo}
            /> 

          </View>
          <View style={styles.layer2}>
            <Text style={styles.header}>{user.name}</Text>
            <Text style={styles.body}>
              {user.description}
            </Text>
          </View>
          <View style={styles.layer3}>
            <View style={styles.layer4}>
              <Text style={styles.footer}>X1000</Text>
            </View>
            <View style={styles.layer5}>
              <Text style={styles.footer}>{user.email}</Text>
            </View>
          </View>
        </View>
        
      )}

    </AuthContext.Consumer>

  );
};

export default Profile;