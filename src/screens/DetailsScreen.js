import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  if (id === 666) {
    return null
  }
  const [data, setData] = useState([]);

  const fetchRestuarants = async () => {
    try {
      const data = await fetch(`https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
          Authorization: 'Bearer HShscMhDrQqiCRBu4fRhEjnFaMeInIcRf4aKW1DBHuG-IkQuZ4d1HzWAoHrl2jjU1yTYFvGtu5dX3itrRiehzwwBOWkqaYAWkuq9iQDKksQRLdhdq2Xt1S9oLNE8YXYx'
        }
      })
      const { photos } = await data.json()
      setData(photos)
    } catch (error) {
      setErrorMessage('An error was occured');
    }
  }

  useEffect(() => {
    if (!data.length) {
      fetchRestuarants()
    }
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map(photo => <Image style={styles.image} source={{ uri: photo }} key={Date.now()} />)}
      </ScrollView>
      <Button title='Back' onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '95%',
    height: 300,
    margin: 10
  }
})

export default DetailsScreen
