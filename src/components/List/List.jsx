import React from 'react'
import Card from '../Card/Card'
import './List.scss'
const List = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/5614119/pexels-photo-5614119.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/5614119/pexels-photo-5614119.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/4247723/pexels-photo-4247723.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/4968390/pexels-photo-4968390.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/5882533/pexels-photo-5882533.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/4004161/pexels-photo-4004161.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'T-shirt',
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/4004114/pexels-photo-4004114.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'T-shirt',
            isNew: false,
            oldPrice: 19,
            price: 12
        }
    ]
  return (
    
    <div className="list">
        {data.map((item) => (
        <Card item={item} key={item.id} />
    ) )}</div>
  )
}

export default List