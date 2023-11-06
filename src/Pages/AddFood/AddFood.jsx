import React from "react";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  return (
    <>
      <Helmet>
        <title>ResQFood | Add Foods</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto">
      <h3 className='text-3xl font-extrabold text-center my-4 uppercase text-purple-950 mx-4'>Join Us in the Fight Against <span className='text-red-600'> Food Waste</span> and Hunger!</h3>
      <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className="text-center text-gray-500 lg:mx-96 text-sm my-4 ">
        Help us create a world where every meal is a shared meal, where no one goes hungry, and where good food is cherished, not discarded. Together, we can make a real impact.
            </p>

<div>
<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-bold text-center text-3xl">Donate Food</p>
				<p className="text-sm"> By joining ResQFood, you become part of a community that is changing the way we think about food, resourcefulness, and compassion</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="foodName" className="text-sm">Food Name</label>
					<input id="foodName" name="foodName" type="text" placeholder="Food Name" required className="w-full rounded-md focus:ring border border-emerald-900 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="foodImage" className="text-sm">Food Image</label>
					<input id="foodImage" name="foodImage" type="url" required placeholder="Food image URL" className="w-full rounded-md focus:ring border border-emerald-900 p-2 " />
				</div>




				<div className="col-span-full sm:col-span-3">
					<label for="Food Quality" className="text-sm">Food Quality</label>
					<input id="Food Quality" name="foodQuality" type="text" required placeholder="Food Quality" className="w-full rounded-md focus:ring border border-emerald-900 p-2 " />
				</div>





				<div className="col-span-full">
					<label for="Pickup Location" className="text-sm">Pickup Location</label>
					<input id="Pickup Location" name="pickupLocation" type="text" placeholder="Pickup Location" className="w-full rounded-md focus:ring border border-emerald-900 p-2 " />
				</div>




				<div className="col-span-full sm:col-span-2">
					<label for="ExpireDate" className="text-sm">Expire Date</label>
					<input id="ExpireDate" type="date" name="expireDate" required className="w-full rounded-md focus:ring border border-emerald-900 p-2 " />
				</div>


				<div className="col-span-full sm:col-span-4">
					<label for="note" className="text-sm">Additional Notes</label>
					<textarea id="note" type="text" placeholder="Additional Notes/Description" className="w-full rounded-md focus:ring border border-emerald-900 p-2 " />
				</div>
        <button type="submit" className="bg-purple-900 w-full col-span-full hover:bg-purple-800 active:bg-purple-900 text-white rounded-md mx-auto p-2 text-lg font-bold">Add Food</button>
			</div>
		</fieldset>

  </form>
</section>


</div>
      </div>
    </>
  );
};

export default AddFood;
