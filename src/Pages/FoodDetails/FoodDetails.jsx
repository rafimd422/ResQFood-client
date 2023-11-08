import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../Context/OurContext";
import axios from "axios";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);

const foodRequest = e => {
    e.preventDefault()
    const form = e.target;
    const id = form.id.value;
    const foodName = form.foodName.value;
    const foodImg = form.foodImage.value;
    const requestDate = form.requestDate.value;
    const requesterEmail = form.userEmail.value;
    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const pickUplocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const aditionalNote = form.shortNote.value;
    const donationMoney = form.donationMoney.value;

const foodCollection = {
    requesterEmail, requesterName: user?.displayName, requesterImage: user?.photoURL, requestDate, status: 'Available', foodName, foodImg, donatorName, donatorEmail, pickUplocation, expireDate, aditionalNote,donationMoney, id
}
console.log(foodCollection)
axios.post('http://localhost:5000/reqfoods',foodCollection)
.then(res => {
  console.log(res.data)
if(res.data.acknowledged){
  Swal.fire({
    icon: "success",
    title: "Request Successfull",
    showConfirmButton: false,
    timer: 1500
  });
}
})

//  /foodreqlist will redirected
}
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex items-center lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <div className="flex items-center mt-6 h-16">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={details.donatorImg}
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700">
                    {details.donatorName}
                  </h1>
                </div>
              </div>
              <img
                className="object-cover object-center w-full h-80 xl:h-[36rem] rounded-md"
                src={details.foodImg}
                alt=""
              />
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-16 lg:px-6">
              <div className="w-full flex justify-between items-center mb-8">
                <p className="text-lg font-semibold">
                  Food Name:{" "}
                  <span className="text-purple-700 font-semibold">
                    {details.foodName}
                  </span>
                </p>

                <p className="bg-green-600 w-fit p-2 rounded-md text-white font-bold">
                  {details.status}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Food Quantity:</span>{" "}
                  {details.quantity}
                </p>
              </div>

              <hr className="my-6 border-gray-200" />

              <div>
                <p>
                  <span className="font-bold">Food Details:</span>{" "}
                  {details.note}
                </p>
              </div>

              <hr className="my-6 border-gray-200" />

              <div>
                <p>
                  <span className="font-bold">Food Expire Date:</span>{" "}
                  {details.expireDate}
                </p>
              </div>

              <hr className="my-6 border-gray-200 " />

              <div>
                <p>
                  <span className="font-bold">PickUp Location:</span>{" "}
                  {details.pickUplocation}
                </p>
              </div>
              <hr className="my-4" />
              <div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="btn bg-purple-500 hover:bg-purple-800 active:bg-purple-600 w-full text-lg text-white font-bold"
                >
                  Request Food
                </button>

                {/* Modal start Here */}

                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-3xl -mt-12">X</button>
                      </form>
                    </div>

                    <form
                       onSubmit={foodRequest}
                      className="flex flex-col mx-auto space-y-12"
                    >
                      <fieldset className="grid grid-cols-4 gap-6 p-4 rounded-md shadow-sm">
                        <div className="space-y-2 col-span-full">
                          <p className="font-bold text-center text-3xl">
                            Request For this Food
                          </p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full">
                          <div className="col-span-full">
                            <label htmlFor="foodName" className="text-sm">
                              Food Name
                            </label>
                            <input
                              defaultValue={details.foodName}
                              id="foodName"
                              name="foodName"
                              type="text"
                              disabled
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
                              defaultValue={details.foodImg}
                              id="foodImage"
                              disabled
                              name="foodImage"
                              type="url"
                              required
                              placeholder="Food image URL"
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>
                          <div className="col-span-full">
                            <label htmlFor="id" className="text-sm">
                              FOOD ID
                            </label>
                            <input
                              defaultValue={details._id}
                              id="id"
                              name="id"
                              type="text"
                              disabled
                              required
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>
                          <div className="col-span-full">
                            <label htmlFor="expireDate" className="text-sm">
                              Expire Date
                            </label>
                            <input
                              defaultValue={details.expireDate}
                              id="expireDate"
                              type="date"
                              disabled
                              name="expireDate"
                              required
                              className="rounded-md focus:ring border border-emerald-900 p-2 w-full"
                            />
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="donatorName"
                              className="text-sm"
                            >
                              Donator Name
                            </label>
                            <input
                              defaultValue={details.donatorName}
                              id="donatorName"
                              name="donatorName"
                              type="text"
                              disabled
                              placeholder="Pickup Location"
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="Pickup Location"
                              className="text-sm"
                            >
                              Donator Email
                            </label>
                            <input
                              disabled
                              defaultValue={details.email}
                              id="donatorEmail"
                              name="donatorEmail"
                              type="text"
                              placeholder="Donator Email"
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="userEmail"
                              className="text-sm"
                            >
                              User Email
                            </label>
                            <input
                              disabled
                              defaultValue={user?.email}
                              id="userEmail"
                              name="userEmail"
                              type="text"
                              placeholder="Pickup Location"
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>
                          <div className="col-span-full">
                            <label
                              htmlFor="pickupLocation"
                              className="text-sm"
                            >
                              Pick Up Location
                            </label>
                            <input
                              disabled
                              defaultValue={details.pickUplocation}
                              id="pickupLocation"
                              name="pickupLocation"
                              type="text"
                              placeholder="Pickup Location"
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>

                          <div className="col-span-full sm:col-span-2">
                            <label htmlFor="requestDate" className="text-sm">
                              Request Date
                            </label>
                            <input
                              defaultValue={new Date()
                                .toISOString()
                                .substr(0, 10)}
                              id="RequestDate"
                              type="date"
                              disabled
                              name="requestDate"
                              required
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2"
                            />
                          </div>

                          <div className="col-span-full sm:col-span-4">
                            <label htmlFor="note" className="text-sm">
                              Additional Notes
                            </label>
                            <textarea
                              id="note"
                              type="text"
                              name="shortNote"
                              required
                              placeholder="Additional Notes/Description"
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>

                          <div className="col-span-full">
                            <label
                              htmlFor="donationMoney"
                              className="text-sm"
                            >
                              Donation Money
                            </label>
                            <input
                              id="donationMoney"
                              required
                              name="donationMoney"
                              type="number"
                              placeholder="Amount Of Donation Money"
                              className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                            />
                          </div>

                          <button
                            type="submit"
                            className="bg-purple-900 w-full col-span-full hover:bg-purple-800 active:bg-purple-900 text-white rounded-md mx-auto p-2 text-lg font-bold"
                          >
                            Requst Food
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodDetails;
