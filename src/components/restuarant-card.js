import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const RestuarantCard = ({ name, image_url, rating, review_count, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
    >
      <Image style={styles.restuarantImg} source={{
        uri: image_url,
      }} />
      <Text style={styles.restuarantName}>{name}</Text>
      <Text style={styles.rating}>{rating} stars, {review_count} Reviews.</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10
  },
  restuarantName: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3
  },
  restuarantImg: {
    width: 270,
    height: 160
  },
  rating: {
    marginLeft: 5,
    color: 'grey'
  }
})

export default RestuarantCard
