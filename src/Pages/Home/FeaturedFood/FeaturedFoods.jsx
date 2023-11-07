
import { Link } from 'react-router-dom';
import Card from './Card';
const FeaturedFoods = () => {


  return (
    <div className='md:container md:mx-auto text-center mx-6 my-24'>
             <h3 className="md:text-4xl text-3xl font-extrabold text-center my-6 uppercase text-purple-950 mx-4">
          Our
          <span className="text-red-600"> Featured</span> Foods
        </h3>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className="text-center text-gray-500 lg:mx-96 text-sm my-4 ">
        Explore our Featured Food section to see how we're turning excess into nourishment. Join us in the mission to share and reduce waste, one meal at a time.
        </p>



<Card />


<Link to={'/availablefoods'} ><button className="text-center bg-purple-800 text-white font-semibold p-3 rounded-md mt-8 my-4">
    Show All
</button></Link>
    </div>
  )
}

export default FeaturedFoods
