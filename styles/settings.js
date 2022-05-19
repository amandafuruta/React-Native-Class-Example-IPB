import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#fff",
    },

    input_text:{
        width:250,
        height: 44,
        padding:10,
        borderWidth:1,
        borderColor: "black",
        marginBottom: 10,
    },

    header:{
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 40,
    }

})

export default styles;