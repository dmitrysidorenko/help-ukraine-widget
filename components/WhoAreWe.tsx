import TextBlock from '../components/customComponents/TextBlock'
import WhyBlock from '../components/whyBlock/WhyBlock'
import WhoAreWeBlock from '../components/whoAreWeBlock/WhoAreWeBlock'
import TrustedWebsites from '../components/trustedWebsites/TrustedWebsites'
import VideoBlock from '../components/VideoBlock'

const WhoAreWe = () => {
  return (
    <div className="bg-black flex flex-col items-center">
      <div className="flex flex-col md:flex-row w-full mt-16">
        <div className="md:w-2/4 md:flex md:justify-end">
          <VideoBlock />
        </div>
        <div className="flex flex-col w-full items-center md:w-2/4">
          <TextBlock title="Who are we?">
            <WhoAreWeBlock />
          </TextBlock>
          <TextBlock title="Why are we doing this?">
            <WhyBlock />
          </TextBlock>
        </div>
      </div>
      <TrustedWebsites />
    </div>
  )
}

export default WhoAreWe
