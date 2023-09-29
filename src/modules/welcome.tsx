import { Button } from '../components/ui/button'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../assets/homeAnimation.json'

export default function Welcome({ onclick }: { onclick: () => void }) {
  return (
    <section className='flex flex-col items-center relative'>
      <div className='w-fit h-80 absolute -top-24'>
        <Player
          src={animationData}
          loop={true}
          autoplay
          style={{ height: '400px' }}
        />
      </div>
      <div className='rounded-lg absolute top-60 h-fit w-fit flex flex-col items-center text-center p-8 bg-primary/30'>
        <div className='pb-6'>
          <p className='sm:text-4xl text-3xl font-semibold pb-2'>
            Welcome <span className='text-primary'>To</span> Manazil
          </p>
          <p className='font-light text-sm sm:text-base'>
            Your stop point for renting House in all the country.
          </p>
        </div>
        <div>
          <Button
            size='default'
            className='text-white font-semibold px-4'
            onClick={onclick}
          >
            Discover our Houses
          </Button>
        </div>
      </div>
    </section>
  )
}
