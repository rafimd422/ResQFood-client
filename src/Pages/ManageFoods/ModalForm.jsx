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
    }

  return (
  <div></div>
  )
}

export default ModalForm
