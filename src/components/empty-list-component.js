import React from 'react'
import RestuarantCard from './restuarant-card'

const EmptyComponent = () => {
  const DATA = {
    name: 'There is nothing suitable here',
    image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg',
    rating: 5,
    review_count: 9999,
    id: 666
  }

  return (
    <RestuarantCard {...DATA} />
  )
}

export default EmptyComponent
