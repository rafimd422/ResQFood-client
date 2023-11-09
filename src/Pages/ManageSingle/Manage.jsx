import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Manage = () => {
    const data = useLoaderData()
    console.log(data)
const navigate = useNavigate()


if(data.length === 0){
  return <div className="h-[80vh] flex flex-col justify-center items-center">
<p className="font-bold text-2xl">
There have been no requests for this Food Item
</p> 
<button onClick={()=> navigate(-1)} className='btn my-4'>Go Back</button>
 </div>
}
  return (

<div>
<h3 className='mx-auto text-center my-12 text-3xl font-bold'>Manage Food Request Status</h3>
<div className='max-w-screen-sm mx-auto my-6'>
       <div className="bg-white overflow-hidden shadow rounded-lg border lg:col-span-1 md:col-span-2 col-span-full md:mx-0 mx-8">
      <div className="px-4 py-5 sm:px-6">
 <div className="flex justify-between items-center">
 <h3 className="text-lg leading-6 font-medium text-gray-900">
          Requster Profile
        </h3>
        <img className='h-20' src={data.requesterImage} alt="" />
 </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Full name
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.requesterName}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.requesterEmail}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Request Date
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.requestDate}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Order Id
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.id}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Donation Amount
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              ${data.donationMoney}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Status
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.status}
            </dd>
          </div>
        </dl>
      </div>
    </div>
<div className="container mx-auto flex justify-between">
  <p></p>
<button className={data.status === 'Delevered' ? 'hidden' : 'btn my-4'}>Mark As Delevered</button>
</div>
    </div>
</div>
  )
}

export default Manage
