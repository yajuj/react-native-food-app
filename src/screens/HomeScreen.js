import React from 'react'
import { Button, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title='SEARCH_PAGE' onPress={() => navigation.navigate('Search')} />
    </View>
  )
}

export default HomeScreen
