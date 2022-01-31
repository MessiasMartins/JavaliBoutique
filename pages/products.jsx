import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import productsData from '@/data/productsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

const listaProdutos = productsData

export default function Products() {
  const [busca, setBusca] = useState('')
  const produtosFiltrados = listaProdutos.filter((prod) => prod.type == busca)
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
          <select
            className="font-black text-gray-900"
            value={busca}
            onBlur={(e) => setBusca(e.target.value)}
          >
            <option className="font-black text-gray-900" value="">
              Todos
            </option>
            <option className="font-black text-gray-900" value="frango">
              Frango
            </option>
            <option className="font-black text-gray-900" value="boi">
              Boi
            </option>
            <option className="font-black text-gray-900" value="porco">
              Porco
            </option>
          </select>
          <div className="flex flex-wrap justify-center">
            {produtosFiltrados.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
