import EventDetailsComponent from '@/app/components/home-components/home-components/EventDetailsComponent'
import IntroCardComponent from '@/app/components/home-components/home-components/IntroCardComponent'
import MapVenue from '@/app/components/home-components/home-components/MapVenue'

const HomePage = () => {
  return (
    <div className='w-full mx-auto flex flex-col'>
        <IntroCardComponent />

        <EventDetailsComponent />

        <MapVenue />

    </div>
  )
}

export default HomePage