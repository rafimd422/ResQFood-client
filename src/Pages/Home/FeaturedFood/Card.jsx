import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Card = () => {
  const { data: foods } = useQuery({
    queryKey: ["foods"],
    queryFn: () => axios.get("http://localhost:5000/foods"),
  });
 foods?.data.sort((a,b) => b.quantity - a.quantity)

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-2 gap-4">
      {foods?.data.slice(0,6).map((foods) => (
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
            <p className="py-2 text-gray-700">
              {foods?.note?.slice(0, 170)}...
            </p>
            <p className="text-start my-2">Qty: {foods.quantity}</p>
            <div className="flex items-center mt-4 text-gray-700 ">
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
              <p className="text-start my-2">Expire Date: {foods.expireDate}</p>
              <button className="btn bg-purple-800 px-2 rounded-md text-slate-200 font-bold">
                View Details
              </button>
            </div>{" "}
            <br />
            <p className="bg-green-600 p-2 rounded-md text-white font-bold">
              {foods.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
