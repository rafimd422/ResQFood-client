import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./../../Context/OurContext";
import { useQuery } from "@tanstack/react-query";
import load from "./../../assets/errorpic.json";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageFoods = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/foods?email=${user?.email}`;
  const {
    data: myFoods,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Manage-Foods"],
    queryFn: () => axios.get(url),
    refetchOnWindowFocus: true,
    refetchOnMount: true,
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
  if (myFoods?.data?.length === 0) {
    refetch();
  }

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/foods/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  // handle update data

  return (
    <>
      <Helmet>
        <title>ResQFood | Manage Foods</title>
      </Helmet>

      {/* modal dialog  */}

      {/* modal dialog  */}

      <div className="sm:container px-4 mx-auto my-20">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            Manage My Foods
          </h2>
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
            {myFoods?.data?.length} Foods
          </span>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Food Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Food Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Quantity</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                      >
                        Expire Date
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {myFoods?.data.map((foods) => (
                      <tr key={foods._id}>
                        <td>
                          <img
                            className="object-cover w-40 h-32 rounded-md"
                            src={foods.foodImg}
                            alt=""
                          />
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="font-medium text-gray-800 ">
                                  {foods.foodName}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                            <h2 className="text-sm font-normal text-emerald-500">
                              {foods.status}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {foods.quantity}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {foods.expireDate}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDelete(foods._id)}
                              className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                            <Link to={`/update/${foods._id}`}>
                              
                              <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                            </Link>
                            <Link to={`/manage/${foods._id}`}>
                              <button className="btn">Manage</button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {/* Repeat the above structure for additional rows */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageFoods;
