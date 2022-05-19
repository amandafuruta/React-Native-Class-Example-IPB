import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  flatList:{
    width: "100%",
  },

  postListItem:{
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    margin: 14,
    padding: 10,
    backgroundColor: "#fff",
  },

  postTitle:{
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

  postSeparator:{
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop:8,
    marginBottom:8,
  },

  postSeparatorLg:{
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop: 40,
    marginBottom: 8,
  },

  postButton:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});
export default styles;