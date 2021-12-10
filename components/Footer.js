import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/dist/client/image'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center font-black mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="whatsapp" href={siteMetadata.whatsapp} size="5" />
          <SocialIcon kind="instagram" href={siteMetadata.instgram} size="5" />
          <SocialIcon kind="google" href={siteMetadata.google} size="5" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm font-black">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-3 text-center text-sm font-black">
          <span>
            Avenida Portugal, 901A - Santa Amélia, Belo Horizonte / Minas Gerais CEP:31550-000
          </span>
        </div>
        <div className="mb-1 text-sm font-black">
          <Link href="https://auderemg.com.br">
            <Image
              className="h-50 w-50 object-cover sm:h-4 md:h-4 lg:w-100pt lg:h-100pt"
              src="/static/images/audere23.png"
              alt="Logo da desenvolvedora"
              width={100}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
