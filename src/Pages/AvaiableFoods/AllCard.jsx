import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import load from '../../assets/errorpic.json'
import { Player } from '@lottiefiles/react-lottie-player';

const AllCard = () => {
  const [sortData, setSortData] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const [title, setTitle] = useState('');
  
  const { data: food, isLoading } = useQuery({
    queryKey: ["Available-Foods"],
    queryFn: () => axios.get("http://localhost:5000/foods"),
  refetchOnWindowFocus: 'always',
  });

  if(isLoading){
    return <div className='h-screen w-screen flex justify-center items-center fixed bg-white'>
        <Player
    autoplay
    loop
    src={load}
    style={{ height: '600px', width: '560px' }}
  />
</div>
}

  const filteredData = food?.data?.filter((foods) =>
    foods?.foodName.toLowerCase().includes(searchResult)
  );

  if (sortData) {
    filteredData.sort((a, b) => new Date(a.expireDate) - new Date(b.expireDate));
  }
 
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            onChange={(e) => {setSearchResult(e.target.value); setTitle(`${filteredData.length} result found for '${e.target.value}'`)}}
            type="search"
            name="search"
            placeholder="Search"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>

        <button
          onClick={() => {
            setSortData(true)
            setTitle('Filtered Foods');

          }}
          className="bg-slate-100 active:bg-slate-200 hover:bg-slate-300 p-4 rounded-lg"
        >
          Sort By Expire Date
        </button>
      </div>

      <h3 className={searchResult  === "" & sortData === false ? 'hidden' : "mt-16 text-3xl font-bold"}>{title}</h3>

      <div className="grid xl:grid-cols-4 my-16 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-2 gap-4">
        {filteredData.map((foods) => (
          <div
            key={foods._id}
            className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Donator Image"
                src={foods.donatorImg}
                className="h-12 w-12 ms-2 my-4 rounded-full object-cover"
              />
              <h3 className="text-md font-medium">{foods.donatorName}</h3>
            </div>
            <img
              className="object-cover object-center w-full h-56"
              src={foods.foodImg}
              alt="avatar"
            />

            <div className="flex items-center px-4 py-3 bg-gray-900">
              <p className="text-slate-200 font-semibold">{foods.foodName}</p>
            </div>

            <div className="px-6 py-4">
              <p className="py-2 text-justify text-gray-700">
                {foods?.note?.slice(0, 160)}...
              </p>
              <p className="text-start my-2">Qty: {foods.quantity}</p>
              <div className="flex items-center mt-4 text-gray-700">
                <svg
                  aria-label="location pin icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                  />
                </svg>
                <h1 className="px-2 text-sm">{foods.pickUplocation}</h1>
              </div>
              <div className="flex justify-between my-2">
                <p className="text-start my-2 text-sm text-slate-500">
                  Expire Date: {new Date(foods.expireDate).toDateString()}
                </p>
                <button className="btn bg-purple-800 px-2 hover:bg-purple-700 active:bg-purple-950 rounded-md text-slate-200 font-bold">
                  View Details
                </button>
              </div>
              <br />
              <p className="bg-green-600 p-2 rounded-md text-white font-bold">
                {foods.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllCard;
