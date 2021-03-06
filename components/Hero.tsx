import Link from 'next/link'
import Parallax from './Parallax'
import Logo from './logo/Logo'

import WidgetOne from '../public/widget/one.png'
import WidgetTwo from '../public/widget/two.png'
import WidgetThree from '../public/widget/three.png'
import WidgetFour from '../public/widget/four.png'
import WidgetExpanded from '../public/widget/expanded.png'
import WidgetCollapsed from '../public/widget/collapsed.png'
import { installManuallyLink } from './constants'
import ShopifyButton from './header/ShopiffyButton'

const WidgetImage = ({
  src,
  name,
  className,
  parallax,
  width,
  height,
}: {
  src: StaticImageData
  name: string
  className?: string
  parallax?: 1 | 2 | 3
  width?: number
  height?: number
}) => {
  return (
    <div
      className={`parallax-item widget-${name} inline-block ${className}`}
      data-parallax={parallax}
    >
      <span className="relative inline-block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src.src} alt={name} width={width} height={height} className="" />
      </span>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="hero bg-yellow-ua relative pt-32 sm:pt-40 pb-36 sm:pb-56">
      <div className="w-12 h-12 absolute top-10 sm:top-20 left-1/2 -translate-x-1/2">
        <Logo />
      </div>
      <Parallax>
        <WidgetImage
          src={WidgetCollapsed}
          name="collapsed"
          parallax={1}
          width={38}
          height={38}
          className="absolute top-5 left-5 lg:top-20% lg:left-20% -rotate-13 opacity-70"
        />
        <WidgetImage
          src={WidgetOne}
          name="one"
          parallax={2}
          width={176}
          height={95}
          className="hidden lg:block absolute top-50% left-5% -rotate-15 opacity-80"
        />
        <WidgetImage
          src={WidgetExpanded}
          name="expanded"
          parallax={3}
          width={176}
          height={127}
          className="absolute -bottom-5 -left-5 lg:bottom-5 lg:left-20% rotate-18 opacity-95"
        />
        <WidgetImage
          src={WidgetThree}
          name="three"
          parallax={2}
          width={96}
          height={96}
          className="absolute top-5 right-0 lg:top-20% lg:right-12% rotate-9 opacity-80"
        />
        <WidgetImage
          src={WidgetCollapsed}
          name="collapsed"
          parallax={1}
          width={38}
          height={38}
          className="hidden lg:block absolute top-45% right-25% rotate-15 opacity-30"
        />
        <WidgetImage
          src={WidgetFour}
          name="four"
          parallax={3}
          width={176}
          height={80}
          className="hidden lg:block absolute bottom-20% right-10% -rotate-7 opacity-90"
        />
        <WidgetImage
          src={WidgetTwo}
          name="two"
          parallax={1}
          width={215}
          height={48}
          className="hero-right-4 absolute bottom-10% -right-10 lg:right-30% -rotate-16 opacity-70"
        />
      </Parallax>

      <div className="flex flex-col items-center justify-center max-w-global text-center relative z-10">
        <h1 className='text-3xl sm:text-6xl leading-tight'>
          Put the <span className="text-blue-ua">Help Ukraine</span>
          <br className="hidden md:block" /> widget on your website!
        </h1>
        <p className="mt-6 sm:mt-10 xl:mt-12 text-base sm:text-xl max-w-lg mx-auto">
          Your customers and visitors of your website will be able to know how they can help Ukraine
          from every place in the world.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 w-full sm:w-auto mt-6 lg:mt-10 xl:mt-16">
          <ShopifyButton variant="big" />
          <Link href={installManuallyLink}>
            <a className="h-[72px] button-outline bg-yellow-ua border-2 border-blue-ua text-blue-ua px-10 py-3 font-bold text-lg rounded-full flex items-center justify-center transition hover:scale-95">
              Install manually
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
