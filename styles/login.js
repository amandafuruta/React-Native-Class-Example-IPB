import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  layer1: {
      padding: 10,
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 10,
  },
  layer2: {
      flex: 4,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "powderblue",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 40
  }, 
  input: {
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 10,
      padding: 10,
      width: "100%"
  },
  input_large: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    padding: 10,
    height: 200,
    width: "100%"
}
});

export default styles;