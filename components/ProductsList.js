import React from 'react'
import Card from './Card'

const ProductsList = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((d) => (
        <Card
          key={d.title}
          title={d.title}
          description={d.description}
          imgSrc={d.imgSrc}
          href={d.href}
        />
      ))}
    </div>
  )
}
export default ProductsList
