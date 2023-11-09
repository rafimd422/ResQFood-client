import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateFood = () => {
const foods = useLoaderData()
const Navigate = useNavigate()


const updateFood = e => {
  e.preventDefault();
  const form = e.target;
  const foodName = form.foodName.value;
  const foodImg = form.foodImage.value;
  const quantity = form.quantity.value;
  const pickUplocation = form.pickupLocation.value;
  const expireDate = form.expireDate.value;
  const note = form.shortNote.value;

  const food = {
    foodName,
    foodImg,
    status: "Available",
    quantity,
    pickUplocation,
    expireDate,
    note,
  };
  console.log(foods?.data?._id)

  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
 axios.put(`https://resqfoodserver.vercel.app/foods/${foods?._id}`, food)
   .then((res) => {
    console.log(res.data)
  if(res.data.modifiedCount > 0){
    Navigate('/managefoods')
    Swal.fire("Saved!", "", "success");
  }
});

  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
    Navigate('/managefoods')
  }
  })
   .catch((error) => console.log(error.message));
}

  return (

         <form onSubmit={updateFood}
              className=" lg:container flex flex-col mx-auto space-y-12"
            >
              
              <fieldset className="grid grid-cols-4 gap-6 p-4 rounded-md shadow-sm">
                <div className="space-y-2 col-span-full">
                <h3 className="md:text-4xl text-3xl font-extrabold text-center my-6 uppercase text-purple-950 mx-4">
          <span className="text-red-600"> Update</span> Food Details
        </h3>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full">
                  <div className="col-span-full">
                    <label htmlFor="foodName" className="text-sm">
                      Food Name
                    </label>
                    <input
                    defaultValue={foods?.foodName}
                      id="foodName"
                      name="foodName"
                      type="text"
                      placeholder="Food Name"
                      required
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="foodImage" className="text-sm">
                      Food Image
                    </label>
                    <input
                    defaultValue={foods?.foodImg}
                      id="foodImage"
                      name="foodImage"
                      type="url"
                      required
                      placeholder="Food image URL"
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="quantity" className="text-sm">
                      Food Quantity
                    </label>
                    <input
                    defaultValue={foods?.quantity}
                      id="quantity"
                      name="quantity"
                      type="number"
                      required
                      placeholder="no. of person to be served"
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                    />
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="Pickup Location" className="text-sm">
                      Pickup Location
                    </label>
                    <input
                    defaultValue={foods?.pickUplocation}
                      id="pickupLocation"
                      name="pickupLocation"
                      type="text"
                      placeholder="Pickup Location"
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                    />
                  </div>

                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="ExpireDate" className="text-sm">
                      Expire Date
                    </label>
                    <input
                    defaultValue={foods?.expireDate}
                      id="ExpireDate"
                      type="date"
                      name="expireDate"
                      required
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                    />
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label htmlFor="note" className="text-sm">
                      Additional Notes
                    </label>
                    <textarea
                    defaultValue={foods?.note}
                      id="note"
                      type="text"
                      name="shortNote"
                      placeholder="Additional Notes/Description"
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-900 w-full col-span-full hover:bg-purple-800 active:bg-purple-900 text-white rounded-md mx-auto p-2 text-lg font-bold"
                  >
                    Update Food
                  </button>
                </div>
              </fieldset>
            </form>
  )
}

export default UpdateFood






