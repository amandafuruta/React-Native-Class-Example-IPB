import React, { useEffect, useState } from "react"
import { Button, View, ActivityIndicator, FlatList , Text} from 'react-native'
import styles from '../styles/post'


const Posts = (props) => {
    const [ isLoading, setLoading ] = useState(true)
    const [ data, setData ] = useState([])
    const uri= "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        fetch(uri)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((erro)=>console.log(erro))
        .finally(()=>setLoading(false))
    }, [] )

    const ListPosts = ({post}) =>{
        return(
            <View style={styles.postListItem}>
                <Text style={styles.postTitle}>Post #{post.id} - {post.title.slice(0,30)}...</Text>
                <Text style={styles.postBody}>{post.body.slice(0,50)}...</Text>
            
                <View style={styles.postSeparator}></View>

                <View>
                    <View style={styles.postButton}>
                        <Button title="See more" onPress={() => props.navigation.navigate('Post', {post:post})}></Button>
                    </View>
                </View>
            </View>

        )
    }

    return(
        <View style={styles.container}>
            {isLoading ? 
                <ActivityIndicator/>
                
                :

                (
                    <FlatList
                        style={styles.flatList}
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={ ({item}) => <ListPosts post={item}/>}
                    />
                )
            }


            {/* <Button
                title="Go to Post1"
                onPress={()=>props.navigation.navigate('Post', {id:1, title:'Post 1'})}
            />
            <Button
                title="Go to Post2"
                onPress={()=>props.navigation.navigate('Post', {id:2, title:'Post 2'})}
            />
            <Button
                title="Go to Post3"
                onPress={()=>props.navigation.navigate('Post', {id:3, title:'Post 3'})}
            /> */}
        </View>
    )
}

export default Posts;


