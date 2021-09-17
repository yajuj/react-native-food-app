import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const RestaurantCard = ({ name, image_url, rating, review_count, id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { id, name })}
      style={styles.cardContainer}
    >
      <Image
        style={styles.restaurantImg}
        source={{
          uri: image_url,
        }}
      />
      <Text style={styles.restaurantName}>{name}</Text>
      <Text style={styles.rating}>
        {rating} stars, {review_count} Reviews.
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 3,
  },
  restaurantImg: {
    width: 270,
    height: 160,
  },
  rating: {
    marginLeft: 5,
    color: "grey",
  },
});

export default RestaurantCard;
