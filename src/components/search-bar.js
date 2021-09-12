import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ search, onSearchTextChange, onSearchSubmit }) => {
  return (
    <View style={styles.container} >
      <AntDesign name="search1" size={35} color="black" />
      <TextInput
        style={styles.input}
        placeholder='Search'
        value={search}
        onChangeText={onSearchTextChange}
        onEndEditing={onSearchSubmit}
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
