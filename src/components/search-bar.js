import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container} >
      <AntDesign name="search1" size={30} color="black" />
      <TextInput
        style={styles.input}
        placeholder='Search'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginLeft: 10
  },
  container: {
    backgroundColor: '#f0EEEE',
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    marginHorizontal: 10,
    marginTop: 10
  }
})

export default SearchBar
