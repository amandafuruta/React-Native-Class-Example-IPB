import React , { useEffect, useState } from "react"
import { Button, ActivityIndicator, View, Text, FlatList } from 'react-native'

import styles from '../styles/coments'

const Comments = (props) => {
    const [ isLoading, setLoading ] = useState(true)
    const [ data, setData ] = useState([])

    const {postId} = props.route.params
    console.log({postId})

    const uri= 'https://jsonplaceholder.typicode.com/comments?postId='+postId
    //const uri= `https://jsonplaceholder.typicode.com/coments?postId=${postId}`

    useEffect(() => {
        fetch(uri)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((erro)=>console.log(erro))
        .finally(()=>setLoading(false))
    }, [] )


    const ListComments = ({comment}) =>{
        return(
            <View style={styles.postListItem}>
                <Text style={styles.postTitle}>{comment.email}</Text>
                <Text style={styles.postBody}>{comment.body}</Text>
            
            </View>

        )
    }

    return(
        <View style={styles.container}>
            {isLoading ? 
                <ActivityIndicator/>
                
                :

                (
                    <>
                        <FlatList
                            style={styles.flatList}
                            data={data}
                            keyExtractor={item => item.id.toString()}
                            renderItem={ ({item}) => <ListComments comment={item}/>}
                        />

                        <View style={styles.button}>
                            <Button
                                title="Go back"
                                onPress={()=>props.navigation.goBack()}
                            />
                        </View>
                    </>
                )
            }
        </View>
    )
}

export default Comments;


