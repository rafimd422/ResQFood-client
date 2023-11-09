import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from './../../Context/OurContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const FoodRequest = () => {

const { user } = useContext(AuthContext)
const { data: requestedFood , refetch } = useQuery({
  queryKey: ['Requested-Food'],
  queryFn: () => axios.get(`https://resqfoodserver.vercel.app/reqfoods?email=${user.email}`),
refetchOnWindowFocus: 'always',
});


if (requestedFood?.data?.length === 0) {
  refetch();
}

const cancelreq = id => {
console.log(id)

Swal.fire({
  title: "Are you sure?",
  text: "You want to cancel this food request?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes,Cancel!"
}).then((result) => {
  if (result.isConfirmed) {
axios.delete(`https://resqfoodserver.vercel.app/reqfoods/${id}`)
.then(res => {
  console.log(res.data)
  if (res.data.deletedCount > 0) {
    Swal.fire({
      title: "Cancelled!",
      text: "Your request has been Cancelled",
      icon: "success"
    });
    refetch()
  }
})
}});
}


  return (
<>
<Helmet>
    <title>ResQFood | Food Requests</title>
  </Helmet>
  <div className="sm:container px-4 mx-auto my-20 min-h-[80vh]">
        <div className="flex items-center gap-x-3  justify-between">
<div className="flex flex-col">
<h3 className="text-3xl font-extrabold text-center my-4 uppercase text-purple-950 mx-4">
          My
          <span className="text-red-600"> Food </span> Requests!
        </h3>
        <div className="flex justify-center mx-auto">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
</div>
          <span className="px-3 py-1 mt-4 text-xs text-blue-600 bg-blue-100 rounded-full">
            {requestedFood?.data?.length} Foods
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
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Donator Name</span>
                        </button>
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
                        Request Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                      >
                        Expire Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                      >
                        Donation Amount
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {requestedFood?.data.map((reqFood) => (
                      <tr key={reqFood._id}>
   
                        <td className="px-2 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-2">
                            <div className="flex items-center gap-x-1">
                              <div>
                                <h2 className="text-md text-gray-800 ">
                                  {reqFood.foodName}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {reqFood.donatorName}
                        </td>
                        <td className="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full font-bold gap-x-2 bg-gray-200">
                            <h2 className={reqFood.status === 'Pending' ? 'text-sm font-normal text-red-500' : 'text-sm font-normal text-emerald-500'}>
                              {reqFood.status}
                            </h2>
                          </div>
                        </td>
                        
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {reqFood.requestDate}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {reqFood.expireDate}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          ${reqFood.donationMoney}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                             {reqFood.status === 'Pending' &&  <button onClick={() => cancelreq(reqFood._id)} className="btn">Cancel Request</button>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  )
}


export default FoodRequest
