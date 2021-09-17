import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import RestaurantList from "../components/restaurant-list";
import SearchBar from "../components/search-bar";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(
        `https://api.yelp.com/v3/businesses/search?term=${search}&location=new york&limit=50`,
        {
          headers: {
            Authorization:
              "Bearer authKey",
          },
        }
      );
      const { businesses } = await data.json();
      setRestaurants(businesses);
    } catch (error) {
      setErrorMessage("An error was occured");
    }
  };

  const filterByPrice = (priceD) => {
    return restaurants.filter(({ price }) => String(price).length === priceD);
  };

  useEffect(() => {
    if (!restaurants.length) {
      fetchRestaurant();
    }
  }, []);

  return (
    <>
      <SearchBar
        search={search}
        onSearchTextChange={(value) => setSearch(value)}
        onSearchSubmit={fetchRestaurant}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList title="Cheap" restaurants={filterByPrice(1)} />
        <RestaurantList title="Advantageous" restaurants={filterByPrice(2)} />
        <RestaurantList title="Costly" restaurants={filterByPrice(3)} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
