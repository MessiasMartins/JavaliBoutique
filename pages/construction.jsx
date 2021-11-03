import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 
        md:text-8xl md:leading-14 md:border-r-2 md:px-6"
        >
          Conteúdo em construção!
        </h1>
      </div>
      <div className="max-w-md">
        <p className="pb-4 mb-4 text-xl font-bold leading-normal md:text-2xl">
          Em breve, esse conteúdo estará disponível para consulta.
        </p>
        <p className="pb-4 mb-8">
          Por hora, não se preocupe, você irá encontrar outros conteúdos na página inicial.
        </p>
        <Link href="/">
          <button
            className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors 
          duration-150 bg-green-600 border border-transparent rounded-lg shadow focus:outline-none 
          focus:shadow-outline-blue hover:bg-green-700 dark:hover:bg-green-500"
          >
            Voltar para página inicial
          </button>
        </Link>
      </div>
    </div>
  )
}
