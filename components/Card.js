import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 w-370 md" style={{ maxWidth: '544px' }}>
    <div className="h-full overflow-hidden border border-gray-600 rounded-15 border-opacity-30 animacao">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={370}
            height={232}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-48 md:h-36"
          width={370}
          height={232}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-xl font-black leading-8 tracking-tight t-black dark:text-white">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="font-black mb-3 prose text-gray-500 max-w-none text-justify t-black dark:text-white">
          {description}
        </p>
        
      </div>
    </div>
  </div>
)

export default Card
