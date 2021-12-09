import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import features from '@/components/Features'
import Image from 'next/dist/client/image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="relative overflow-hidden -ml-7 bg-imagem-header bg-cover">
        <div>
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            
            <main className="ml-60 w-9/12 px-4 sm:mt-0 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl pt-10 leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 italic font-sans">
                  <span className="block xl:inline ">Carnes nobres com qualidade e sem igual</span>
                  
                </h1>
                <p className="pt-10 font-bold text-white">Torne seu evento ou refeição diária em uma experiência sem igual. Não deixe de conferir.</p>
                
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href={siteMetadata.whatsapp}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-bold rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 
                    md:text-lg md:px-10 h-12"
                    >
                      WHATSAPP
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-bold rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 
                    md:text-lg md:px-10 h-12 ml-3"
                    >
                      E-MAIL
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        
      </div>

      
      <div>
        <div className="mt-10 w-full">
          <h2 className="text-xl text-center font-sans italic text-black text-62 mt-20 mb-20">Javali Boutique de Carnes</h2>
          <div className="flex mt-10 justify-around">
            
            <div>
              <img className="mx-auto" src="../static/images/motorcycle-delivery-44491.png"/>
              <h3 className="text-lg text-center font-bold mt-2">Delivery</h3>
              <p className="text-md text-center font-bold w-4/6 mx-auto mt-3">Use nossos serviços de delivery, entregamos em toda BH e Região</p>
            </div>

            <div className="mt-6">
              <img className="mx-auto mb-4" src="../static/images/parking-sign-25261.png"/>
              <h3 className="text-lg text-center font-bold">Estacionamento no Local</h3>
              <p className="text-md text-center font-bold w-4/6 mx-auto mt-2">Estacionamento próprio no local</p>
            </div>

            <div>
              <img className="mx-auto" src="../static/images/maps-location-pointer-111051.png" />
              <h3 className="text-lg text-center font-bold mt-2">Fácil Localização</h3>
              <p className="text-md text-center w-4/6 mx-auto font-bold mt-3">Acesso rápido e fácil aos principais corredores viário de BH</p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex mt-40">
        <div className="w-1/2">
          <img className="mx-auto" src="../static/images/sobrecoxa-1.png" />
        </div>

        <div className="w-1/2 my-auto">
          <h2 className="font-black text-48">Qualidade, preço e satisfação.</h2>
          <p className="text-lg font-black mt-5">
            Produtos de qualidade impar e com preço competitivo. 
            Carnes nobres e fornecedores qualificados, tudo visando 
            uma boa experiência
          </p>          
        </div>
      </div> 

      <div className="flex mt-40">        

          <div className="w-1/2 my-auto ml-20">
            <h2 className="font-black text-48 leading-none">Duvidas ou Informações sobre o preparo?</h2>
            <p className="text-lg font-black mt-5">
              Quer preparar aquela peça nova pela primeira vez 
              e tem duvidas de como deve ser realizado? 
              Conte com a gente! 
            </p>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href={`mailto:${siteMetadata.email}`}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
              text-base font-bold rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 
              md:text-lg md:px-10 h-12 ml-3"
              >
                LIGAR
              </a>
            </div>

            <div className="rounded-md shadow ml-20">
              <a
                href={siteMetadata.whatsapp}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
              text-base font-bold rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 
              md:text-lg md:px-10 h-12"
              >
                WHATSAPP
              </a>
            </div>                
          </div>          
        </div>
        
        <div className="w-1/2">
          <img className="mx-auto" src="../static/images/carrecordeiro-1.png" />
        </div>        

      </div>

      <div className="bg-imagem-receitas bg-cover w-full h-96 mt-20">

        <div className="pt-20 w-1/3 right-3/4 ml-45">
          <h2 className="text-white text-xl font-black text-62 italic font-sans">Receitas</h2>

          <p className="text-white text-lg font-black mt-10 font-sans">Acompanhe nossas sugestões de receitas, utilizando como base nossa gama de produtos.</p>

          <button className="bg-gray-200 h-10 w-52 rounded-lg border-gray-900 font-bold mt-10">Veja nossas Receitas!</button>
        </div>

      
      </div>   
      
    </>
  )
}
