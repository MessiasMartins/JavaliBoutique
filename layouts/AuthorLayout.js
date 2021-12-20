import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email } = frontMatter

  return (
    <>
      <PageSEO
        title={`Sobre - ${siteMetadata.otherTitle}`}
        description={siteMetadata.description}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 ml-0 ml-32">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="font-black text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} size="6" />
              <SocialIcon kind="whatsapp" href={siteMetadata.whatsapp} size="5" />
              <SocialIcon kind="instagram" href={siteMetadata.instgram} size="5" />
              <SocialIcon kind="google" href={siteMetadata.google} size="5" />
            </div>
          </div>
          <div className="mx-0 lg:mx-7 pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2 text-justify font-black">{children}</div>
        </div>
      </div>
    </>
  )
}
