import Image from 'next/image'
import Loader from '../public/loading.gif'
const Spinner = () => {
  return (
    <>
    <Image className='w-[200px] m-auto block' src={Loader} alt='Loading...' />
    </>
  )
}

export default Spinner