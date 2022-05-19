import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    postSeparatorLg:{
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        marginTop: 40,
        marginBottom: 8,
    },

    postListItem:{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        margin: 14,
        padding: 10,
        backgroundColor: "#fff",
    },

    postButton2x:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    postTitle:{
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
    },
})

export default styles
