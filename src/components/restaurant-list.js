import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RestuarantCard from './restuarant-card'

const RestuarantsList = ({ title, restuarants }) => {
  const defaultRestuarantsData = [
    {
      name: 'There is nothing suitable here',
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg',
      rating: 5,
      review_count: 9999
    }
  ]
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restuarants.length ? restuarants : defaultRestuarantsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestuarantCard {...item} />}
      />
      {restuarants.length ? null : <Text>There is no resturant</Text>}
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
