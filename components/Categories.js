import React from 'react'
const Categories = ({ type, filterItems }) => {
  return (
    <div>
      {type.map((category) => {
        return (
          <button
            key={category.title}
            type="button"
            className="px-10 border border-gray-600"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
