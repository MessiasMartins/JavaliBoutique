import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import productsData from '@/data/productsData'
import { PageSEO } from '@/components/SEO'
import Categories from '@/components/Categories'
import ProductsList from '@/components/ProductsList'

const allTypes = ['TODOS', ...new Set(productsData.map((item) => item.type))]

export default function Products() {
  const [items, setItems] = useState(productsData)
  const [type, setType] = useState(allTypes)

  const filterItems = (category) => {
    if (category === 'TODOS') {
      setItems(productsData)
      return
    }
    const newItems = productsData.filter((item) => item.type === category)
    setItems(newItems)
  }

  return (
    <>
      <PageSEO
        title={`Produtos - ${siteMetadata.otherTitle}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 ml-1 lg:ml-32">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Produtos e Serviços
          </h1>
          <p className="text-lg leading-7 text-gray-900 font-black dark:text-gray-400">
            Aqui se encontram os produtos e serviços oferecidos por nós:
          </p>
        </div>
        <div className="container py-12">
          <Categories type={type} filterItems={filterItems} />
          <ProductsList items={items} />
        </div>
      </div>
    </>
  )
}
