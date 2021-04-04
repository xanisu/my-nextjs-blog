import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`Sobre - ${siteMetadata.author}`}
        description={`Sobre mi - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre mi
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Front-End</div>
            <div className="text-gray-500 dark:text-gray-400"></div>

            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>Desarollador Front-End, curioso y meticuloso por naturaleza.</p>
            <p>Algo (o bastante) maniático depende de a quién le preguntes.</p>
            <p>
              Soy uno de esos developers que empezó siendo simplemente un programador o informático,
              en que las webs se maquetaban con tablas (sacrilegio).
            </p>
            <p>
              A lo largo de los años (ya no soy un chaval, como habrás adivinado) he tenido la
              suerte de poder trabajar con diferentes tecnologías (java, asp, c#, flash, electron,
              cordova....incluso con cosas tan raras como INFORMIX)
            </p>
            <p>
              A dia de hoy me interesa todo lo relacionado con el desarrollo Front-End, en especial
              lo relativo al 'performance'. Es por esto que intento seguir muy de cerca a los gurús
              Addy Osmani y Harry Roberts.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
