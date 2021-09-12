import React from 'react'
import { Button, View } from 'react-native'

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Button title='SEARCH_PAGE' onPress={() => navigation.navigate('Search')} />
    </View>
  )
}

export default DetailsScreen
