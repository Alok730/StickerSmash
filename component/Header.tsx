// import { StyleSheet, Text, View } from 'react-native'
// // import { SearchBar } from "@rneui/themed";
// import React from 'react'
// import SearchBarComponent from './SearchBarComponent';
// import { Button } from 'react-native-paper';

// const Header = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Header</Text>
//       <SearchBarComponent />
//       <Button
//         icon=""
//         mode="contained"
//         onPress={() => console.log("Pressed")}
//         buttonColor="red"
//         style={{ height: "50%", width: "15%" }}
//         theme={{ }}
//       >
//         Press me
//       </Button>
//     </View>
//   );
// }

// export default Header

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     width:'100%',
//     padding:10,
//     // height: 70,
//     backgroundColor: "green",
//     flexDirection:"row",
//     alignItems:'center',
//     justifyContent:'space-between'

//   },
// });




import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBarComponent from "./SearchBarComponent";
import { Button } from "react-native-paper";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Header</Text>
      <SearchBarComponent />
      <Button
        mode="contained"
        onPress={() => console.log("Pressed")}
        buttonColor="black"
        textColor="#06c296"
        contentStyle={styles.buttonContent} // Controls the content size inside the button
        style={styles.button} // Adjust button size and positioning
        labelStyle={styles.buttonLabel} // Optional for styling button text
      >
        Press me
      </Button>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    padding: 10,
    backgroundColor: "#06c296",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Aligns the text, search bar, and button evenly
  },
  headerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10, // Adds space between the text and search bar
  },
  button: {
    height: 40, // Button height to match the search bar
    width: "20%", // Button width relative to the header width
    borderRadius: 10, // Rounded corners for the button
  },
  buttonContent: {
    height: "100%", // Ensures the button's content takes up the full height
  },
  buttonLabel: {
    fontSize: 14, // Smaller text for the button
  },
});
