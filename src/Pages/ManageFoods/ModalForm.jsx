import { Player } from "@lottiefiles/react-lottie-player";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import load from "./../../assets/errorpic.json";


const ModalForm = ({foodId}) => {


// step one : get Data from server
const url = `http://localhost:5000/foods/${foodId}`;
const {
  data: foods,
  isLoading,
} = useQuery({
  queryKey: ["Update-Foods"],
  queryFn: () => axios.get(url)
});

if (isLoading) {
  return (
    <div className="h-screen w-screen flex justify-center items-center fixed bg-white">
      <Player
        autoplay
        loop
        src={load}
        style={{ height: "600px", width: "560px" }}
      />
    </div>
  );
}





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
    // axios.put(`http://localhost:5000/foods/${foods?.data?._id}`, food)
    //   .then((res) => console.log(res.data))
    //   .catch((error) => console.log(error.message));
    }

  return (
    <div className="modal-box">
<div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-3xl -mt-12">X</button>
      </form>
    </div>

         <form
              onSubmit={(updateFood)}
              className="flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-4 rounded-md shadow-sm">
                <div className="space-y-2 col-span-full">
                  <p className="font-bold text-center text-3xl">Update Food Details</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full">
                  <div className="col-span-full">
                    <label htmlFor="foodName" className="text-sm">
                      Food Name
                    </label>
                    <input
                    defaultValue={foods?.data?.foodName}
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
                    defaultValue={foods?.data?.foodImg}
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
                    defaultValue={foods?.data?.quantity}
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
                    defaultValue={foods?.data?.pickUplocation}
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
                    defaultValue={foods?.data?.expireDate}
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
                    defaultValue={foods?.data?.note}
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
  </div>
  )
}

export default ModalForm
