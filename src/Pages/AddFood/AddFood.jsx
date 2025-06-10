import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./../../Context/OurContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImg = form.foodImage.value;
    const quantity = form.quantity.value;
    const pickUplocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const note = form.shortNote.value;

    const food = {
      donatorName: user.displayName,
      email: user.email,
      donatorImg: user.photoURL,
      foodName,
      foodImg,
      status: "Available",
      quantity,
      pickUplocation,
      expireDate,
      note,
    };

    axios
      .post("https://resqfoodserver.vercel.app/foods", food)
      .then((res) => {
        console.log(res.data);
        if (res.data?.acknowledged) {
          Swal.fire({
            title: "Good job!",
            text: "Food Added Successfully",
            icon: "success",
          });
          navigate("/managefoods");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>ResQFood | Add Foods</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto">
        <h3 className="text-3xl font-extrabold text-center my-4 uppercase text-purple-950 mx-4">
          Join Us in the Fight Against{" "}
          <span className="text-red-600"> Food Waste</span> and Hunger!
        </h3>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <p className="text-center text-gray-500 lg:mx-96 text-sm my-4 ">
          Help us create a world where every meal is a shared meal, where no one
          goes hungry, and where good food is cherished, not discarded.
          Together, we can make a real impact.
        </p>

        <div>
          <section className="p-6">
            <form
              onSubmit={addProduct}
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-bold text-center text-3xl">Donate Food</p>
                  <p className="text-sm lg:block hidden">
                    By joining ResQFood, you become part of a community that is
                    changing the way we think about food, resourcefulness, and
                    compassion
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="foodName" className="text-sm">
                      Food Name
                    </label>
                    <input
                      id="foodName"
                      name="foodName"
                      type="text"
                      placeholder="Food Name"
                      required
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="foodImage" className="text-sm">
                      Food Image
                    </label>
                    <input
                      id="foodImage"
                      name="foodImage"
                      type="url"
                      required
                      placeholder="Food image URL"
                      className="w-full rounded-md focus:ring border border-emerald-900 p-2 "
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="quantity" className="text-sm">
                      Food Quantity
                    </label>
                    <input
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
                  > Add Food
                  </button>
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
