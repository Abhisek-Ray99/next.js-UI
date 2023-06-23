import { TruckIcon } from '@heroicons/react/24/outline'

const ProcessBtn = () => {
  return (
    <button className="flex bg-black px-4 py-2 rounded-full text-white items-center">
        Start The Process
        <TruckIcon className="h-4 w-4 text-black-500 mx-2 " />
    </button>
  )
}

export default ProcessBtn