import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RestuarantsList from '../components/restaurant-list';
import SearchBar from '../components/search-bar';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [restuarants, setRestuarants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const fetchRestuarants = async () => {
    try {
      const data = await fetch(`https://api.yelp.com/v3/businesses/search?term=${search}&location=san jose&limit=50`, {
        headers: {
          Authorization: 'Bearer HShscMhDrQqiCRBu4fRhEjnFaMeInIcRf4aKW1DBHuG-IkQuZ4d1HzWAoHrl2jjU1yTYFvGtu5dX3itrRiehzwwBOWkqaYAWkuq9iQDKksQRLdhdq2Xt1S9oLNE8YXYx'
        }
      })
      const { businesses } = await data.json()
      setRestuarants(businesses)

    } catch (error) {
      setErrorMessage('An error was occured');
    }
  }

  const filterByPrice = priceD => {
    return restuarants.filter(({ price }) => String(price).length === priceD)
  }

  useEffect(() => {
    if (!restuarants.length) {
      fetchRestuarants()
    }
   }, [])


  return (
    <View style={styles.container}>
      <SearchBar
        search={search}
        onSearchTextChange={value => setSearch(value)}
        onSearchSubmit={fetchRestuarants}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestuarantsList title='Cheap' restuarants={filterByPrice(1)} />
        <RestuarantsList title='Advantageous' restuarants={filterByPrice(2)} />
        <RestuarantsList title='Costly' restuarants={filterByPrice(3)} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff'
  }
})

export default SearchScreen
