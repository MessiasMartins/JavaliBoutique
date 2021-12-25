import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import features from '@/components/Features'
import Image from 'next/dist/client/image'
import NewsletterForm from '@/components/NewsletterForm'
import MovieRow from '../components/MovieRow'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="overflow-hidden lg:bg-imagem-header bg-cover bg-red-700 ml-0 lg:-ml-0.5">
        <div>
          <div className="relative z-10 pb-8 sm:pb-16 lg:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="opacity-0 anim-1 text-xl mt-5 ml-5 text-white italic">Tel: (31) 2527-2909</div>
          
            <main className="lg:ml-60 lg:w-12/12 lg:px-4 sm:mt-0 sm:px-6 lg:mt-20 lg:px-8 xl:mt-28 md:w-full">            
            
              <div className="text-center lg:text-left">
                <div className="opacity-0 anim-2">
                  <h1 className="text-3xl pt-10 leading-9 tracking-tight text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 italic font-sans">
                    <span className="block xl:inline ">
                      Carnes nobres com qualidade sem igual em BH e Região
                    </span>
                  </h1>
                  <p className="pt-10 font-bold text-white">
                    Torne seu evento ou refeição diária em uma experiência sem igual. Não deixe de
                    conferir, fale conosco.
                  </p>
                </div>                                

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow opacity-0 anim-3">
                    <a
                      href={siteMetadata.whatsapp}
                      className="md:w-full w-64 flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-bold rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 
                    md:text-lg md:px-10 h-12 md:ml-0 mx-auto"
                    >
                      WHATSAPP
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 opacity-0 anim-4">
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="md:w-full w-64 flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-bold rounded-md lg:text-white text-black lg:bg-red-700 bg-white hover:bg-red-800 md:py-4 
                    md:text-lg md:px-10 h-12 md:ml-3 mx-auto mb-3 md:mb-0"
                    >
                      E-MAIL
                    </a>
                  </div>
                  <div className="rounded-md shadow opacity-0 anim-5">
                    <a
                      href={siteMetadata.whatsapp}
                      className="md:w-full w-64 flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-bold rounded-md text-white bg-button-black hover:bg-gray-700 md:py-4 
                    md:text-lg md:px-6 h-12 md:ml-7 mx-auto"
                    >
                      COMO CHEGAR
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
          <h2 className="text-4xl text-center font-sans italic text-black md:text-62 mt-20 mb-20 dark:text-white">
            Javali Boutique de Carnes
          </h2>
          <div className="md:flex mt-10 justify-around">
            <div className="animacao">
              <img className="mx-auto" src="../static/images/motorcycle-delivery-44491.png" />
              <h3 className="text-lg text-center mt-2 font-bold">Delivery</h3>
              <p className="text-md text-center font-bold w-4/6 mx-auto mt-3">
                Use nossos serviços de delivery, entregamos em toda BH e Região
              </p>
            </div>

            <div className="md:mt-6 mt-10 animacao">
              <img className="mx-auto mb-4" src="../static/images/parking-sign-25261.png" />
              <h3 className="text-lg text-center font-bold">Estacionamento no Local</h3>
              <p className="text-md text-center font-bold w-4/6 mx-auto mt-2">
                Estacionamento próprio no local
              </p>
            </div>

            <div className="md:mt-0 mt-10 animacao">
              <img className="mx-auto" src="../static/images/maps-location-pointer-111051.png" />
              <h3 className="text-lg text-center font-bold mt-2">Fácil Localização</h3>
              <p className="text-md text-center w-4/6 mx-auto font-bold mt-3">
                Acesso rápido e fácil aos principais corredores viários de BH
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:mt-40 mt-20">
        <div className="md:w-1/2 md:mb-0 mb-10">
          <img className="mx-auto" src="../static/images/sobrecoxa-1.png" />
        </div>

        <div className="md:w-1/2 my-auto lg:mx-0 mx-5">
          <h2 className="font-black md:text-48 text-4xl ml-0 lg:-ml-2">
            Qualidade, preço e satisfação.
          </h2>
          <p className="text-lg font-black mt-5 text-justify mx-0 lg:mx-12 ml-0 lg:-ml-1.5">
            Produtos de qualidade impar e com preço competitivo. Carnes nobres e fornecedores
            qualificados, tudo visando uma boa experiência.
          </p>
        </div>
      </div>

      <div className="md:flex md:mt-40 mt-20">
        <div className="md:w-1/2 my-auto lg:ml-20 lg:mx-0 mx-5">
          <h2 className="font-black md:text-48 text-4xl leading-none">
            Dúvidas ou Informações sobre o preparo?
          </h2>
          <p className="text-lg font-black mt-5 text-justify">
            Quer preparar aquela peça nova pela primeira vez e tem dúvidas de como deve ser
            realizado? Conte com a gente!
          </p>

          <div className="mt-5 sm:mt-8 sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 mb-5">
              <a
                href={`callto:${siteMetadata.phone}`}
                className="w-64 flex items-center justify-center px-8 py-3 border border-transparent 
              text-base font-bold rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 
              md:text-lg md:px-10 h-12 mx-auto"
              >
                LIGAR
              </a>
            </div>

            <div>
              <a
                href={siteMetadata.whatsapp}
                className="w-64 flex items-center justify-center px-8 py-3 border border-transparent 
              text-base font-bold rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 
              md:text-lg md:px-10 h-12 mx-auto"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:inline hidden">
          <img className="mx-auto" src="../static/images/carrecordeiro-1.png" />
        </div>
      </div>

      <div className="lg:bg-imagem-receitas bg-red-700 bg-cover w-full h-96 mt-20">
        <div className="pt-20 lg:w-1/3 lg:right-3/4 lg:ml-45 mx-5 md:mx-20">
          <h2 className="text-white text-xl font-black text-62 italic font-sans text-center">
            Receitas
          </h2>

          <p className="text-white text-lg font-black mt-10 text-justify">
            Acompanhe nossas sugestões de receitas, utilizando como base nossa gama de produtos.
          </p>

          <button className="bg-gray-200 hover:bg-gray-300 h-10 w-52 rounded-lg border-gray-900 font-bold mt-10 lg:ml-32 md:ml-44 mx-auto dark:text-gray-900 font-black">
            Veja nossas Receitas!
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-62 italic text-center mt-10">Produtos</h2>
        <p className="font-black text-lg text-justify md:mb-5 mb-14 md:mx-24 mx-7">
          Alguns de nossos produtos e kits pré-montados ideais para churrascos e eventos, dos mais
          variados portes com a qualidade excepcional do Javali Boutique de Carnes. Veja uma seleção
          completa na página de produtos.
        </p>

        <MovieRow />
      </div>

      <div className="lg:flex md:mt-20 mt-10 md:mb-10 mb-5">
        <div className="lg:w-1/2">
          <h2 className="text-48 italic text-center">Conheça nosso blog</h2>
          <p className="mx-10 mt-10 font-black">
            Acompanhe noticias e informações diversas sobre produtos, receitas e curiosidades
            através do nosso Blog. Conteúdo produzido pela equipe do Javali com foco principal em
            manter nossos clientes informados.
          </p>

          <img className="mt-10 mx-auto" src="../static/images/Rectangle6.png" />
        </div>

        <div className="lg:w-536 md:h-752 lg:ml-10 md:bg-imagem-blog bg-red-700 bg-cover md:rounded-3xl lg:mx-0 md:mx-5">
          <div className="mx-14 lg:mt-72 mt-24">
            <h2 className="md:text-48 text-4xl italic text-white md:pt-56 lg:pt-0 pt-5">
              Fique por dentro das novidades
            </h2>

            <p className="md:mt-10 mt-5 font-black text-white text-justify">
              Não perca nenhuma atualização, assine nossa Newsletter para receber um E-mail sempre
              que uma atualização for postada.
            </p>

            <div className="lg:flex md:mt-10 mt-5 rounded-lg">
              <input
                className="bg-white font-black w-64 h-10 rounded-lg md:ml-0 mx-auto"
                placeholder="    Seu email"
              />
              <button className="md:mt-0 mt-5 bg-laranja rounded-lg text-md h-10 w-44 md:ml-5 mx-auto text-sm text-white font-black md:mb-0 mb-5">
                CADASTRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
