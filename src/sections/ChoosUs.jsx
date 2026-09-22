import ChooseCard from '../components/ChooseCard'
import rider from '../assets/images/rider.png'
import bowl from '../assets/images/bowl.png'
import top from '../assets/images/top.png'

const ChoosUs = () => {
  return (
    <div className='flex flex-col gap-6 text-center'>
        <h2 className='text-orange-500 text-2xl font-bold'>
            WHY CHOOSE US
        </h2>
        <p className='text-6xl capitalize font-semibold'>
            Your favourite food <br /> delivery partner
        </p>
        <div className='flex '>
            <ChooseCard animation={rider} heading="Lightning Fast" para="Super quick delivery right at your door"/>
            <ChooseCard animation={bowl} heading="Wide Variety" para="Choose from a wde range of cuisines and dishes"/>
            <ChooseCard animation={top} heading="Top Quality" para="We use the freshest ingredients for the best taste"/>
        </div>
    </div>
  )
}

export default ChoosUs