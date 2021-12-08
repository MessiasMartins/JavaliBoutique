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
          <h2 className="text-xl text-center font-sans italic text-black">Javali Boutique de Carnes</h2>
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
          <h2 className="text-xl font-black">Qualidade, preço e satisfação.</h2>
          <p className="text-lg font-black mt-5">
            Produtos de qualidade impar e com preço competitivo. 
            Carnes nobres e fornecedores qualificados, tudo visando 
            uma boa experiência
          </p>          
        </div>
      </div> 

      <div className="flex mt-40">        

        <div className="w-1/2 my-auto ml-20">
          <h2 className="text-xl font-black">Duvidas ou Informações sobre o preparo?</h2>
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

      

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Localização / Contato
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <p className=" pt-6 pb-8 text-lg text-gray-500 dark:text-gray-400">
              Avenida Portugal 901A - Santa Amélia, Belo Horizonte / MG <br></br>
              CEP: 31550-000 <br></br>
              Telefone: 031 3653-2390 <br></br>
              E-mail: comercial@madeirassantos.com.br<br></br>
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-0 sm:mt-0 sm:ml-3">
                <a
                  href={siteMetadata.whatsapp}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 
                    md:text-lg md:px-10"
                >
                  Whatsapp
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 
                    md:text-lg md:px-5"
                >
                  E-Mail
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 
                    md:text-lg md:px-5 sm: text-center"
                >
                  Como Chegar?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Últimas Postagens
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Publicado em</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Leia mais &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            Todas as publicações &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
