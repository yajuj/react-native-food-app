import React from 'react'
import { View, StyleSheet } from 'react-native'
import SearchBar from '../components/search-bar'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
  borderColor: '#fff'
 }
})

export default SearchScreen
