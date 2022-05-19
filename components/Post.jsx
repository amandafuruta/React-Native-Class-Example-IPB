import * as React from "react"
import { Button, StyleSheet, View, Text } from 'react-native'

const Post = (props) => {
    const {post} = props.route.params
    const id = post.id
    
    return(
        <View style={styles.postListItem}>
            <Text style={styles.postTitle}>Post: #{post.id}</Text>

            <Text style={styles.postBody}>{post.body}</Text>

            <View style={styles.postSeparatorLg}></View>

            <View>
                <View style={styles.postButton2x}>
                    <Button
                        title="Go back"
                        onPress={()=>props.navigation.goBack()}
                    />

                    <Button
                        title="Go to Comments"
                        onPress={()=>props.navigation.navigate('Comments', {postId: id})}
                    />

                </View>

            </View>
        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

