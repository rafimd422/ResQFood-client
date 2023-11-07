import { Helmet } from "react-helmet-async";
import AllCard from './AllCard';

const AvailableFoods = () => {
  return (
    <>
      <Helmet>
        <title>ResQFood | Available Foods</title>
      </Helmet>
      <div className='md:container md:mx-auto text-center mx-6 my-12'>
             <h3 className="md:text-4xl text-3xl font-extrabold text-center my-6 uppercase text-purple-950 mx-4">
          All
          <span className="text-red-600"> Available</span> Foods
        </h3>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className="text-center text-gray-500 lg:mx-96 text-md my-4 ">
        Browse our selected food items below. These items are ready for donation to support those in need within our community.
        </p>



<AllCard />

    </div>    </>
  );
};

export default AvailableFoods;
