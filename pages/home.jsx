import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Home() {
  return (
    <>
      <PageSEO title={`- ${siteMetadata.author}`} description={siteMetadata.description} />
    </>
  )
}
