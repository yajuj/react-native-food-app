import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import EmptyComponent from './empty-list-component'
import RestuarantCard from './restuarant-card'

const RestuarantsList = ({ title, restuarants }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restuarants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RestuarantCard {...item} />}
        ListEmptyComponent={EmptyComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    margin: 10
  },
  listContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginHorizontal: 10
  }
})

export default RestuarantsList
