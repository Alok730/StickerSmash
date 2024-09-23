// import React, { useState } from "react";
// import { StyleSheet, View } from "react-native";
// import { Searchbar } from "react-native-paper";

// const SearchBarComponent: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const updateSearch = (query: string) => {
//     setSearchQuery(query);
//     // Handle search logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Searchbar
//         placeholder="Search..."
//         onChangeText={updateSearch}
//         value={searchQuery}
//         iconColor="#6a1b9a" // Customize icon color
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width:"70%",
//     height: "100%",
//     padding: 10, // Container padding
//   }
// });

// export default SearchBarComponent;

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBarComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearch = (query: string) => {
    setSearchQuery(query);
    // Handle search logic here
  };

  return (
    <Searchbar
      placeholder="Search..."
      onChangeText={updateSearch}
      value={searchQuery}
      style={styles.searchbar} // Apply custom styles
      inputStyle={styles.input} // Style the input text
    />
  );
};

const styles = StyleSheet.create({
  searchbar: {
    height: 40, // Smaller height for the search bar
    width: "50%", // Takes up 65% of the header width
    borderRadius: 20, // Rounded corners
    backgroundColor: "#f1f1f1", // Light background color
    shadowColor: "#000", // Shadow effect for elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2, // Elevation for Android
  },
  input: {
    fontSize: 14,
    marginTop: -10, // Smaller font size for the input text
  },
});

export default SearchBarComponent;
